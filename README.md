# Work Order Status

## Background Info
This web application reads open work orders from a FleetNet database
and displays them in tables.
It acts as a replacement for the FleetNet *Work Status* screen.
It is intended to be used on a shop floor for mechanics to track open work.

The application has been tested in Google Chrome.

## Building
### Prerequisites
* [Visual Studio 2017](https://www.visualstudio.com/downloads/)
* [.NET Framework 4.7](https://www.microsoft.com/net/download/dotnet-framework-runtime/net47)
* [Yarn](https://yarnpkg.com/en/) (NPM may work, but it is untested.)
* For Deployment: [IIS](https://www.iis.net/)
* 
### Building the Application
1. Clone or download the application.
2. Open a shell and navigate to the [WorkOrderStatus](./WorkOrderStatus/) directory inside the project.
3. run `yarn install`
4. *Optional*: run `gulp build`
5. Open Visual Studio 2017 and open the solution ([WorkOrderStatus.sln](./WorkOrderStatus.sln)).
6. Add a `connectionStrings.config` file. See: [Connecting to the Database](#Connecting-to-the-Database).
7. Build and run.

### Building Static Assets
The application uses Gulp and Webpack to build and package
TypeScript and SCSS files into JavaScript and CSS files.
It uses Visual Studio's builtin *Task Runner Explorer*
to automatically build these files when the solution is opened.

A static asset build can also be triggered from the command line by running
`gulp build` or `gulp watch` from the WorkOrderStatus directory.

### Connecting to the Database

Add a `connectionStrings.config` file to the `WorkOrderStatus` directory.
The contents of the file should look something like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<connectionStrings>
	<add
		name="DefaultConnectionString"
		 connectionString="Data Source=SERVER_NAME;Initial Catalog=DB_NAME;Integrated Security=False;Persist Security Info=True;User ID=USER_NAME;Password=PW;MultipleActiveResultSets=True" providerName="System.Data.SqlClient" />
</connectionStrings>
```

There are several values that will be specific to your server:

| Name        | Value                                                                           |
|-------------|---------------------------------------------------------------------------------|
| SERVER_NAME | The FQDN of the SQL server.                                                     |
| DB_NAME     | The name of the database where work orders are stored. For us it is: `FNWO_SQL` |
| USER_NAME   | A SQL user with read only access to the database.                               |
| PW          | The password for the SQL user.                                                  |

## Reference
### Original SQL From Fleetnet
The original SQL for the FleetNet *Work Status* screen (cleaned up)
is as follows:

```SQL
SELECT
	MT.DestinationNo AS "Asset #",
	MT.WorkOrderNo AS "WO #",
	MT.OpenDate AS "Open Date",
	MT.OpenTime AS "Open Time",
	MT.[Description] AS "Description",
	MT.OutOfServiceDateTime AS "Out of Serice Date",
	MT.ReturnToServiceDateTime AS "Return to Service Date",
	MT.CompletionStatusCode AS "Status Code",
	MT.EstimatedRepairTime AS "Estimated Repair Time",
	CST.CompletionDescription AS "Completion Status",
	ET.EmployeeShortName AS "Employee Signed In",
	EAT.OperationCode AS "Oper Code",
	EAT.EmployeeNo AS "Employee No",
	EAT.TimeStarted AS "Time Started"
FROM FNWO_MasterTable AS MT
LEFT JOIN FNWO_CompletionStatusTable AS CST ON MT.CompletionStatusCode = CST.CompletionStatusCode
LEFT JOIN FNWO_EmployeeAssignmentTable AS EAT ON MT.WorkOrderNo = EAT.WorkOrderNo
LEFT JOIN FNWO_EmployeeTable AS ET ON EAT.EmployeeNo = ET.EmployeeNo
LEFT JOIN FNWO_OperationCodeTable AS OCT ON EAT.OperationCode = OCT.OperationCode
WHERE MT.DestinationFlag='V' AND MT.CloseDate Is Null
ORDER BY MT.DestinationNo;
```

Prior labor for computing estimated time for completion.
```SQL
SELECT
	Sum(FNWO_TransactionTable.Quantity) AS SumOfLabor
	FROM FNWO_TransactionTable
	WHERE FNWO_TransactionTable.WorkOrderNo='1V01286463' AND
	FNWO_TransactionTable.TransactionCode='L' AND
	FNWO_TransactionTable.EmployeeNo='03475' AND
	FNWO_TransactionTable.OperationCode='06005';
```

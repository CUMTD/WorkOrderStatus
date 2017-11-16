# Work Order Status

## Original SQL From Fleetnet
The original SQL from Fleetnet (cleaned up) is as follows:

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
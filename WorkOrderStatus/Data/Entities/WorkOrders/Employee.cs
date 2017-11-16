namespace WorkOrderStatus.Data.Entities.WorkOrders
{
    public class Employee
    {
	    public string EmployeeNo { get; set; }
	    public string EmployeeShortName { get; set; }

	    public virtual EmployeeAssignment Assignment { get; set; }

    }
}

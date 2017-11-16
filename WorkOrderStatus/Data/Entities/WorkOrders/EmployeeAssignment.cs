using System;

namespace WorkOrderStatus.Data.Entities.WorkOrders
{
    public class EmployeeAssignment
    {
	    public string WorkOrderNo { get; set; }
	    public string EmployeeNo { get; set; }
	    public string OperationCode { get; set; }
	    public DateTime? TimeStarted { get; set; }

	    public virtual WorkOrder WorkOrder { get; set; }

		public virtual Employee Employee { get; set; }
    }
}

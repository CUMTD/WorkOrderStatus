using System.Collections.Generic;

namespace WorkOrderStatus.Data.Entities.WorkOrders
{
    public class CompletionStatus
    {
	    public string CompletionStatusCode { get; set; }
	    public string CompletionDescription { get; set; }

	    public virtual ICollection<WorkOrder> WorkOrders { get; set; }
    }
}

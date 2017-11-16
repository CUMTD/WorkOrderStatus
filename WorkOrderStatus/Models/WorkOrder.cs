using System;

namespace WorkOrderStatus.Models
{
	public class WorkOrder
	{
		public string AssetNumber { get; set; }
		public string WorkOrderNumber { get; set; }
		public string Open { get; set; }
		public TimeSpan DownTime { get; set; }
		public string[] Description { get; set; }
		public WorkStatus WorkStatus { get; set; }
		public string CompletionStatus { get; set; }

		public WorkOrder() { }

		public WorkOrder(Data.Entities.WorkOrders.WorkOrder wo)
		{
			AssetNumber = wo.DestinationNo;
			WorkOrderNumber = wo.WorkOrderNo;
			Open = wo.Open?.ToString();
			DownTime = TimeSpan.FromSeconds(1);
			Description = wo
				?.Description
				?.Replace("\r", string.Empty)
				?.Split('\n') ?? new  string[0];
			WorkStatus = WorkStatus.Create(wo.EmployeeAssignments);
			CompletionStatus = wo.CompletionStatus?.CompletionDescription;
		}
	}
}

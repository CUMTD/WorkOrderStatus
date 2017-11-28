using System;
using System.Collections.Generic;

namespace WorkOrderStatus.Data.Entities.WorkOrders
{
	public class WorkOrder
	{
		public string WorkOrderNo { get; set; }
		public string DestinationNo { get; set; }
		public DateTime? OpenDate { get; set; }
		public DateTime? OpenTime { get; set; }

		public DateTime? Open
		{
			get
			{
				if (OpenDate.HasValue && OpenTime.HasValue)
				{
					return new DateTime(OpenDate.Value.Year, OpenDate.Value.Month, OpenDate.Value.Day, OpenTime.Value.Hour,
						OpenTime.Value.Minute, OpenTime.Value.Second);
				}
				return null;
			}
		}
		public string Description { get; set; }
		public DateTime? OutOfService { get; set; }
		public DateTime? ReturnToService { get; set; }
		public string CompletionStatusCode { get; set; }
		public double? EstimatedRepairTime { get; set; }

		public string DestinationFlag { get; set; }
		public DateTime? CloseDate { get; set; }

		public bool IsClosed => CloseDate.HasValue;

		public virtual CompletionStatus CompletionStatus { get; set; }
		public virtual ICollection<EmployeeAssignment> EmployeeAssignments { get; set; }

		public TimeSpan? Downtime
		{
			get
			{
				if (OutOfService.HasValue && !ReturnToService.HasValue)
				{
					return DateTime.Now - OutOfService.Value;
				}
				return null;
			}
		}

	}
}

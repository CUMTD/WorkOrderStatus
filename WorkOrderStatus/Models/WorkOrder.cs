using System;
using WorkOrderStatus.Extensions;

namespace WorkOrderStatus.Models
{
	public class WorkOrder : IComparable<WorkOrder>
	{
		public string AssetNumber { get; set; }
		public string WorkOrderNumber { get; set; }
		public string Open { get; set; }
		public string DownTime { get; set; }
		public string[] Description { get; set; }
		public WorkStatus[] WorkStatus { get; set; }
		public string CompletionStatus { get; set; }

		public WorkOrder() { }

		public WorkOrder(Data.Entities.WorkOrders.WorkOrder wo)
		{
			AssetNumber = wo.DestinationNo;
			WorkOrderNumber = wo.WorkOrderNo;
			Open = wo.Open?.ToString();
			DownTime = wo.Downtime.ToReadableString();
			Description = wo
				?.Description
				?.Replace("\r", string.Empty)
				?.Split('\n') ?? new  string[0];
			WorkStatus = Models.WorkStatus.ConvertAll(wo.EmployeeAssignments);
			CompletionStatus = wo.CompletionStatus?.CompletionDescription;
		}

		public int CompareTo(WorkOrder other)
		{
			// if the asset is a number we want to compare as a number.
			// if it's not we use regular string comparision.
			if (int.TryParse(AssetNumber, out var myNumber))
			{
				if (int.TryParse(other.AssetNumber, out var otherNumber))
				{
					return myNumber.CompareTo(otherNumber);
				}
				return -1;
			}
			// ReSharper disable once ConvertIfStatementToReturnStatement
			if (int.TryParse(other.AssetNumber, out var _))
			{
				return 1;
			}

			return string.Compare(AssetNumber, other.AssetNumber, StringComparison.Ordinal);
		}
	}
}

using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace WorkOrderStatus.Models
{
	public class WorkOrderGroup
	{
		public string Status { get; set; }
		public int SortOrder { get; set; }
		public WorkOrder[] WorkOrders { get; set; }

		private static readonly TextInfo _textInfo = new CultureInfo("en-US", false).TextInfo;

		public WorkOrderGroup()
		{

		}

		public WorkOrderGroup(string status, IEnumerable<WorkOrder> workOrders)
		{
			if (status != null)
			{
				Status = _textInfo.ToTitleCase(status.ToLower());
			}
			WorkOrders = (workOrders ?? Enumerable.Empty<WorkOrder>())
				.OrderBy(wo => wo)
				.ToArray();
			SortOrder = GetSortOrder(status);
		}

		private static int GetSortOrder(string status)
		{
			switch (status)
			{
				case "In Progress":
					return 1;
				case "HOLD":
					return 2;
				case "Tripper":
					return 3;
				case "Stopped":
					return 4;
				case "Out of Service":
					return 5;
				case "Warranty Work":
					return 6;
				case "Completed":
					return 7;
				default:
					return 1000;
			}
		}

	}
}

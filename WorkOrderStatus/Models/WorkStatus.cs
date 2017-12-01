using System.Collections.Generic;
using System.Linq;
using WorkOrderStatus.Extensions;

namespace WorkOrderStatus.Models
{
    public class WorkStatus
    {
	    public string EmployeeName { get; set; }
	    public string TimeStarted { get; set; }
	    public string OperatorCode { get; set; }
	    public string EstimatedCompletionTime { get; set; }

		public static WorkStatus[] ConvertAll(IEnumerable<Data.Entities.WorkOrders.EmployeeAssignment> assignments)
		{
			var enumeratedAssignments = assignments?.ToArray() ?? new Data.Entities.WorkOrders.EmployeeAssignment[0];
			return enumeratedAssignments.Length > 0 ? enumeratedAssignments.Select(Convert).ToArray() : null;
		}

		private static WorkStatus Convert(Data.Entities.WorkOrders.EmployeeAssignment assignment) => new WorkStatus
		{
			EmployeeName = assignment.Employee?.EmployeeShortName,
			TimeStarted = assignment.TimeStarted.FormatTodayTime(),
			OperatorCode = assignment.OperationCode,
			EstimatedCompletionTime = null
		};

	}
}

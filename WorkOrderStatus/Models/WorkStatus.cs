using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace WorkOrderStatus.Models
{
    public class WorkStatus
    {
	    public string EmployeeName { get; set; }
	    public string TimeStarted { get; set; }
	    public string OperatorCode { get; set; }
	    public string EstimatedCompletionTime { get; set; }

		public static WorkStatus Create(IEnumerable<Data.Entities.WorkOrders.EmployeeAssignment> assignments)
		{
			var enumeratedAssignments = assignments?.ToArray() ?? new Data.Entities.WorkOrders.EmployeeAssignment[0];
			if (enumeratedAssignments.Length > 0)
			{
				var assignment = enumeratedAssignments[0];
				return new WorkStatus
				{
					EmployeeName = assignment.Employee?.EmployeeShortName,
					TimeStarted = assignment.TimeStarted?.ToString(CultureInfo.InvariantCulture),
					OperatorCode = assignment.OperationCode,
					EstimatedCompletionTime = null
				};
			}
			return null;
		}

	}
}

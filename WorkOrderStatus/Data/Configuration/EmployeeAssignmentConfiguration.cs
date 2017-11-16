using System.Data.Entity.ModelConfiguration;
using WorkOrderStatus.Data.Entities.WorkOrders;

namespace WorkOrderStatus.Data.Configuration
{
	internal class EmployeeAssignmentConfiguration : EntityTypeConfiguration<EmployeeAssignment>
	{
		public EmployeeAssignmentConfiguration()
		{
			ToTable("FNWO_EmployeeAssignmentTable");

			HasKey(ea => ea.EmployeeNo);

			HasRequired(ea => ea.Employee)
				.WithOptional(e => e.Assignment);
			//.Map(mc => mc.MapKey("EmployeeNo"));
		}
	}
}

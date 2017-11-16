using System.Data.Entity.ModelConfiguration;
using WorkOrderStatus.Data.Entities.WorkOrders;

namespace WorkOrderStatus.Data.Configuration
{
	internal class EmployeeConfiguration : EntityTypeConfiguration<Employee>
	{
		public EmployeeConfiguration()
		{
			ToTable("FNWO_EmployeeTable");
			HasKey(e => e.EmployeeNo);
		}
	}
}

using System.Data.Entity.ModelConfiguration;
using WorkOrderStatus.Data.Entities.WorkOrders;

namespace WorkOrderStatus.Data.Configuration
{
	internal class WorkOrderConfiguration : EntityTypeConfiguration<WorkOrder>
	{
		public WorkOrderConfiguration()
		{
			ToTable("FNWO_MasterTable");

			HasKey(wo => wo.WorkOrderNo);

			HasMany(wo => wo.EmployeeAssignments)
				.WithOptional(ea => ea.WorkOrder)
				.HasForeignKey(ea => ea.WorkOrderNo);

			HasOptional(wo => wo.CompletionStatus)
				.WithMany(cs => cs.WorkOrders)
				.HasForeignKey(wo => wo.CompletionStatusCode);

			Property(wo => wo.OutOfService)
				.HasColumnName("OutOfServiceDateTime");

			Property(wo => wo.ReturnToService)
				.HasColumnName("ReturnToServiceDateTime");
		}
	}
}

using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using WorkOrderStatus.Data.Configuration;
using WorkOrderStatus.Data.Entities.WorkOrders;

namespace WorkOrderStatus.Data
{
	public sealed class FleetnetContext : DbContext, IFleetnetContext
	{
		private DbSet<WorkOrder> WorkOrders { get; }

		public FleetnetContext(string connectionStringName) : base(connectionStringName)
		{
#if DEBUG
			Database.Log = action => System.Diagnostics.Debug.WriteLine(action, "EF");
#endif

			WorkOrders = Set<WorkOrder>();
		}

		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
			AddConfigurations(modelBuilder);
		}

		private static void AddConfigurations(DbModelBuilder modelBuilder)
		{
			modelBuilder.Configurations.Add(new WorkOrderConfiguration());
			modelBuilder.Configurations.Add(new CompletionStatusConfiguration());
			modelBuilder.Configurations.Add(new EmployeeAssignmentConfiguration());
			modelBuilder.Configurations.Add(new EmployeeConfiguration());
		}
		
		public Task<WorkOrder[]> GetOpenOrdersAsync() => WorkOrders
			.AsQueryable()
			.Include(wo => wo.EmployeeAssignments)
			.Include(wo => wo.CompletionStatus)
			.Include(wo => wo.EmployeeAssignments.Select(ea => ea.Employee))
			.Where(wo => wo.DestinationFlag == "V" && wo.CloseDate == null)
			.ToArrayAsync();
	}
}
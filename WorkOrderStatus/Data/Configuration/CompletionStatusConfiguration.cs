using System.Data.Entity.ModelConfiguration;
using WorkOrderStatus.Data.Entities.WorkOrders;

namespace WorkOrderStatus.Data.Configuration
{
    internal class CompletionStatusConfiguration : EntityTypeConfiguration<CompletionStatus>
    {
	    public CompletionStatusConfiguration()
	    {
		    ToTable("FNWO_CompletionStatusTable");

		    HasKey(cs => cs.CompletionStatusCode);
	    }
    }
}

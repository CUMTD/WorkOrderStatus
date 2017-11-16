using System.Threading.Tasks;
using WorkOrderStatus.Data.Entities.WorkOrders;

namespace WorkOrderStatus.Data
{
    public interface IFleetnetContext
    {
	    Task<WorkOrder[]> GetOpenOrdersAsync();
    }
}

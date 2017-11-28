using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using WorkOrderStatus.Data;
using WorkOrderStatus.Models;

namespace WorkOrderStatus.Controllers.API
{
	[RoutePrefix("work-orders")]
    public class WorkOrderController : ApiController
    {
		private IFleetnetContext FleetnetContext { get; }

	    public WorkOrderController(IFleetnetContext fleetnetContext)
	    {
		    FleetnetContext = fleetnetContext ?? throw new ArgumentException(nameof(fleetnetContext));
	    }

		[HttpGet]
	    [Route("open")]
	    public async Task<IEnumerable<WorkOrderGroup>> Open()
		{
			// get all open orders from db
			var orders = await FleetnetContext
				.GetOpenOrdersAsync()
				.ConfigureAwait(false);

			// convert to model
			var converted = orders
				.Select(o => new WorkOrder(o))
				.OrderBy(wo => wo);

			// group
			return converted
				.GroupBy(wo => wo.CompletionStatus)
				.Select(g => new WorkOrderGroup(g.Key, g))
				.OrderBy(wog => wog.SortOrder);
		}



    }
}

using System.Web.Mvc;
using System.Web.Routing;

namespace WorkOrderStatus
{
    public static class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
	        ConfigureRouteCollection(routes);
	        MapRoutes(routes);
        }


	    private static void ConfigureRouteCollection(RouteCollection routes)
	    {
		    // all routes should be lowercase
		    routes.LowercaseUrls = true;
		    routes.AppendTrailingSlash = true;

		    // security related
		    routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
	    }

	    private static void MapRoutes(RouteCollection routes)
		{
			routes.MapRoute(
				"Default",
				"{controller}/{action}/{id}",
				new { controller = "Home", action = "Index", id = UrlParameter.Optional }
			);

		}
	}
}

using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http;

namespace WorkOrderStatus
{
	public class Global : HttpApplication
	{
		void Application_Start(object sender, EventArgs e)
		{
			// Code that runs on application startup
			AreaRegistration.RegisterAllAreas();
			GlobalConfiguration.Configure(WebApiConfig.Register);
			RouteConfig.RegisterRoutes(RouteTable.Routes);
			FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
			ConfigureViewEngines();

		}

		/// <summary>
		/// Configures the view engines. By default, Asp.Net MVC includes the Web Forms
		/// (WebFormsViewEngine) and Razor (RazorViewEngine).
		/// </summary>
		private static void ConfigureViewEngines()
		{
			ViewEngines.Engines.Clear();
			ViewEngines.Engines.Add(new RazorViewEngine());
		}

	}
}
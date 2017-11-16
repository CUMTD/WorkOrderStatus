using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace WorkOrderStatus
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
	        ConfigureRoutes(config);
	        RemoveXmlFormatter(config);
	        ConfigureSerializer(config);

        }

	    public static void ConfigureRoutes(HttpConfiguration config)
	    {
			// Web API configuration and services

		    // Web API routes
		    config.MapHttpAttributeRoutes();

		    config.Routes.MapHttpRoute(
			    "DefaultApi",
			    "api/{controller}/{id}",
			    new { id = RouteParameter.Optional }
		    );
		}


		public static void RemoveXmlFormatter(HttpConfiguration config)
	    {
		    var formatters = config.Formatters;
		    formatters.Remove(formatters.XmlFormatter);
	    }

	    public static void ConfigureSerializer(HttpConfiguration config)
	    {
		    config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
		    config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;
	    }
	}
}

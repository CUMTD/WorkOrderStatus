using System.Linq;
using System.Web.Http;
using System.Web.Mvc;
using Unity.AspNet.Mvc;
using WebActivatorEx;
using WorkOrderStatus;

[assembly: PreApplicationStartMethod(typeof(UnityWebActivator), "Start")]
[assembly: ApplicationShutdownMethod(typeof(UnityWebActivator), "Shutdown")]

namespace WorkOrderStatus
{
	/// <summary>
	/// Provides the bootstrapping for integrating Unity with ASP.NET MVC and Web API.
	/// </summary>
	public static class UnityWebActivator
	{
		/// <summary>
		/// Integrates Unity when the application starts.
		/// </summary>
		public static void Start()
		{
			var container = WorkOrderStatusUnityContainer.GetConfiguredContainer();

			FilterProviders.Providers.Remove(FilterProviders.Providers.OfType<FilterAttributeFilterProvider>().First());
			FilterProviders.Providers.Add(new UnityFilterAttributeFilterProvider(container));

			DependencyResolver.SetResolver(new UnityDependencyResolver(container));

			Microsoft.Web.Infrastructure.DynamicModuleHelper.DynamicModuleUtility.RegisterModule(typeof(UnityPerRequestHttpModule));

			// web API
			GlobalConfiguration.Configuration.DependencyResolver = new Unity.AspNet.WebApi.UnityDependencyResolver(container);
		}

		/// <summary>
		/// Disposes the Unity container when the application is shut down.
		/// </summary>
		public static void Shutdown()
		{
			var container = WorkOrderStatusUnityContainer.GetConfiguredContainer();
			container.Dispose();
		}
	}
}

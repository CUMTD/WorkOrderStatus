using System;
using Unity;
using Unity.Injection;
using Unity.Lifetime;
using WorkOrderStatus.Data;

namespace WorkOrderStatus
{
	public static class WorkOrderStatusUnityContainer
	{
		private static readonly Lazy<IUnityContainer> _container = new Lazy<IUnityContainer>(WorkOrderStatusUnityContainer.CreateContainer);

		public static IUnityContainer GetConfiguredContainer() => _container.Value;

		private static IUnityContainer CreateContainer()
		{
			var container = new UnityContainer();
			ConfigureEF(container);
			return container;
		}

		// DefaultConnectionString
		private static void ConfigureEF(IUnityContainer container) => container.RegisterType<IFleetnetContext, FleetnetContext>(
			new TransientLifetimeManager(), new InjectionConstructor("DefaultConnectionString"));
	}
}

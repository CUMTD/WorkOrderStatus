using Unity;
using Unity.Injection;
using Unity.Lifetime;
using WorkOrderStatus.Data;

namespace WorkOrderStatus
{
	public static class WorkOrderStatusUnityContainer
	{
		public static IUnityContainer CreateContainer()
		{
			var container = new UnityContainer();
			ConfigureEF(container);
			return container;
		}

		private static void ConfigureEF(IUnityContainer container)
		{
			container.RegisterType<IFleetnetContext, FleetnetContext>(
				new TransientLifetimeManager(),
				new InjectionFactory(f=> new FleetnetContext("DefaultConnectionString")));
		}

	}
}
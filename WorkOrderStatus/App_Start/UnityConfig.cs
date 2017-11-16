using System;
using Unity;
using WorkOrderStatus;

namespace Cumtd.Mtdweb.Website
{
	/// <summary>
	/// Specifies the Unity configuration for the main container.
	/// </summary>
	public static class UnityConfig
	{
		#region Unity Container

		private static readonly Lazy<IUnityContainer> container = new Lazy<IUnityContainer>(WorkOrderStatusUnityContainer.CreateContainer);

		/// <summary>
		/// Gets the configured Unity container.
		/// </summary>
		public static IUnityContainer GetConfiguredContainer()
		{
			return container.Value;
		}

		#endregion Unity Container
	}
}
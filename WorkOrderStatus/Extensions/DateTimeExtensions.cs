using System;
using System.Globalization;

namespace WorkOrderStatus.Extensions
{
    public static class DateTimeExtensions
    {
		public static string FormatTodayTime(this DateTime? dt)
		{
			if (!dt.HasValue)
			{
				return null;
			}

			return dt.Value.Date == DateTime.Now.Date ?
				dt.Value.ToShortTimeString() :
				dt.Value.ToString(CultureInfo.CurrentCulture);
		}
	}
}

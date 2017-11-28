using System;
using System.Collections.Generic;
using System.Linq;

namespace WorkOrderStatus.Extensions
{
	public static class TimespanExtensions
	{
		public static string ToReadableString(this TimeSpan? span) =>
			span.HasValue ?
			span.Value.ToReadableString() :
			string.Empty;

		public static string ToReadableString(this TimeSpan span) => string
			.Join(", ", span.GetReadableStringElements().Where(str => !string.IsNullOrWhiteSpace(str)));

		private static IEnumerable<string> GetReadableStringElements(this TimeSpan span)
		{
			yield return Format((int)Math.Floor(span.TotalDays), "d");
			yield return Format(span.Hours, "h");
			yield return Format(span.Minutes, "m");
		}

		private static string Format(int value, string suffix) =>
			value == 0 ? string.Empty : $"{value}{suffix}";

	}
}

export function getRelativeTimeString(
  date: Date | number,
  alwaysRelative = false,
): string {
  // Allow dates or times to be passed
  const timeMs = typeof date === "number" ? date : date.getTime();

  // Get the amount of seconds between the given date and now
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

  if (!alwaysRelative) {
    if (Math.abs(deltaSeconds) > (86400 * 30)) {
      const options : any = {day: 'numeric', month: 'long'}
      if (Math.abs(deltaSeconds) > 86400 * 365) {
        options.year = 'numeric'
      }
      return date.toLocaleString('en', options)
    }
  }

  // Array reprsenting one minute, hour, day, week, month, etc in seconds
  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];

  // Array equivalent to the above but in the string representation of the units
  const units: Intl.RelativeTimeFormatUnit[] = ["second", "minute", "hour", "day", "week", "month", "year"];

  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  // Intl.RelativeTimeFormat do its magic
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: "auto" });
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}

export function getShortenedRelative(
  date: Date | number
) {
  // Allow dates or times to be passed
  const timeMs = typeof date === "number" ? date : date.getTime();

  // Get the amount of seconds between the given date and now
  const deltaSeconds = Math.round((Date.now() - timeMs) / 1000);

  // Array reprsenting one minute, hour, day, week, month, etc in seconds
  const cutoffs = [60, 3600, 86400, 86400 * 7];

  // Array equivalent to the above but in the string representation of the units
  const units = ["s", "m", "h", "d", "w"];

  // Grab the ideal cutoff unit
  let unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));
  if (unitIndex === -1) unitIndex = 4;

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  return `${Math.floor(deltaSeconds/divisor)}${units[unitIndex]}`;

  // Intl.RelativeTimeFormat do its magic
  // const rtf = new Intl.RelativeTimeFormat('en', { numeric: "always", style: 'narrow' });
  // return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}
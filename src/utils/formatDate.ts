export function formatDate(
  date: string,
  locales: Intl.LocalesArgument = 'de-DE',
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }) {
  try {
    return new Date(date).toLocaleDateString(locales, options);
  } catch (error) {
    return date;
  }
}
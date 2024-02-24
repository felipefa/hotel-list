interface Price {
  currency: string;
  symbol: string;
  value: string;
}

export function formatPrice(
  price: Price,
  locales: Intl.LocalesArgument = 'de-DE',
  options: Intl.NumberFormatOptions = {
    currency: 'EUR',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
    style: 'currency',
  }) {
  const { currency, symbol, value } = price;

  try {
    return Number(value).toLocaleString(locales, { ...options, currency });
  } catch (error) {
    return `${value} ${symbol}`;
  }
}
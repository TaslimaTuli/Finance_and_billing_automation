interface ExtendedNumberFormatOptions extends Intl.NumberFormatOptions {
  currency?: string;
}

export const formatCurrency = (
  amount: number,
  locale = 'en-US',
  options: ExtendedNumberFormatOptions = {}
) => {
    // Use Intl.NumberFormat for robust currency formatting
    const formatter = new Intl.NumberFormat(locale, options);
    const formattedAmount = formatter.format(amount);
  
    // Optionally add a currency symbol based on locale
    const currencyCode = options.currency || formatter.resolvedOptions().currency;
    const currencySymbol = currencyCode ? `${currencyCode} ` : '';
  
    return currencySymbol + formattedAmount;
  };
  
export function formatCurrency(price: string) {
  if (price) {
    const currencyFormatted = parseFloat(price.replace(',','.'))
    return currencyFormatted
  }
}
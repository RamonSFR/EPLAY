const priceFormatter = (price = 0) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export default priceFormatter

export const sortByPrice = (products, sort) => {
  const sortFuncAsc = (a,b) => {
    return a.priceWithDiscount-b.priceWithDiscount
  }
  const sortFuncDesc = (a,b) => {
    return b.priceWithDiscount-a.priceWithDiscount
  }
  switch (sort.type) {
    case 'asc':
      return products.sort(sortFuncAsc)
    case 'desc':
      return products.sort(sortFuncDesc)
    default:
      return products
  }
}
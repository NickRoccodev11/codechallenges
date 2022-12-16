// given the sale price and discount %, find the original price
// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price),
//  25 is the sale percentage and 100 is the original price

const DiscoverOriginalPrice = (salePrice, salePercent) => {
    let originalPrice = salePrice / (1 - (salePercent * .01))
    return originalPrice.toFixed(2)
}

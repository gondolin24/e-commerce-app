function average(nums) {
    if (nums.length === 0) {
        return 0
    }
    return nums.reduce((a, b) => a + b, 0) / nums.length
}

exports.Query = {
    hello: (parent, args, context) => {
        return "World!"
    },
    products: (parent, args, {products, reviews}) => {
        const {filter} = args
        let validProducts = products
        if (filter) {
            if (filter.onSale) {
                validProducts = validProducts.filter((product) =>
                    product.onSale
                )
            }

            if ([1, 2, 3, 4, 5].includes(filter.avgRating)) {
                const productMap = reviews.reduce((acc, review) => {
                    let current = []
                    const id = review.productId
                    if (acc.has(id)) {
                        current = acc.get(id)
                    }
                    current.push(review.rating)
                    acc.set(id, current)
                    return acc
                }, new Map())
                validProducts = validProducts.filter((product) => {
                    const productReviews = productMap.get(product.id) || []
                    return average(productReviews) >= filter.avgRating
                })

            }
        }
        return validProducts
    },
    product: (parent, args, {products}) => {
        return products.find((item) => item.id === args.id)
    },
    categories: (parent, arg, context) => {
        return context.categories
    },
    category: (parent, args, {categories}) => {
        return categories.find((item) => item.id === args.id)
    }
}

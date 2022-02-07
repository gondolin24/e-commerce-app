exports.Query = {
    hello: (parent, args, context) => {
        return "World!"
    },
    products: (parent, args, {products}) => {
        return products

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

exports.Category = {
    products: ({id}, args, {products}) => {
        const {filter} = args

        return products.filter((product) => product.categoryId === id).filter((product) => {
            if (filter.onSale) {
                return product.onSale
            } else {
                return true
            }
        })
    }
}

exports.Category = {
    products: ({id}, args, {db}) => {
        const {filter} = args

        return db.products.filter((product) => product.categoryId === id).filter((product) => {
            if (filter.onSale) {
                return product.onSale
            } else {
                return true
            }
        })
    }
}

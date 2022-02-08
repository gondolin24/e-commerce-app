const {v4: uuid} = require('uuid')
exports.Mutation = {
    addCategory: (parent, args, {db}) => {
        const newCategory = {
            id: uuid(),
            name: args.input.name
        }
        db.categories.push(newCategory)
        return newCategory
    },
    addProduct: (parent, args, {db}) => {
        const item = {
            ...args.input,
            id: uuid()
        }

        db.products.push(item)
        return item
    },
    addReview(parent, args, {db}) {
        const item = {
            ...args.input
        }
        db.reviews.push(item)

        return item
    },
    deleteCategory(parent, {id}, {db}) {
        db.categories = db.categories.filter(items => items.id !== id)
        db.products = db.products.map((product) => {
            const category = (product.categoryId === id) ? null : product.category
            return {
                ...product,
                category,
                categoryId: (product.categoryId === id) ? null : product.categoryId
            }
        })

        return true
    },
    deleteProduct(parent, {id}, {db}) {
        db.reviews = db.reviews.filter((review) => review.productId !== id)
        db.products = db.products.filter((product) => product.id !== id)
        return true
    },
    deleteReview(parent, {id}, {db}) {
        db.reviews = db.reviews.filter((review) => review.id !== id)
        return true

    },
    updateCategory(parent, {id, input}, {db}) {
        const newCat = {
            id,
            name: input.name
        }

        db.categories = db.categories.map((cat)=>{
            if(cat.id === id){
                return {...newCat}
            }
            return cat

        })
        return newCat


    }
}

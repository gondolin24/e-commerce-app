const {v4: uuid} = require('uuid')
const {categories} = require("../db");
exports.Mutation = {
    addCategory: (parent, args, {categories}) => {
        const newCategory = {
            id: uuid(),
            name: args.input.name
        }
        categories.push(newCategory)
        return newCategory
    },
    addProduct: (parent, args, {products}) => {
        const item = {
            ...args.input,
            id: uuid()
        }

        products.push(item)
        return item
    },
    addReview(parent, args, {reviews}) {
        const item = {
            ...args.input
        }
        reviews.push(item)

        return item
    }
}

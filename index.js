const {ApolloServer, gql} = require('apollo-server')
const {typeDefs} = require('./schema')
const {Query} = require("./resolvers/Query");
const {Product} = require("./resolvers/Product");
const {Category} = require("./resolvers/Category");
const {categories, products, reviews} = require("./db")
const {Mutation} = require("./resolvers/Mutation");


const server = new ApolloServer({
    resolvers: {
        Query,
        Product,
        Category,
        Mutation
    }, typeDefs,
    context: {
        categories,
        products,
        reviews
    }
})

server.listen().then(({url}) => {
    console.log("Server is ready at" + url)
})

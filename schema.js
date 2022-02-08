const {gql} = require("apollo-server");
exports.typeDefs = gql`
    type Query {
        hello: String
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean
        category: Category
        reviews: [Review!]!
    }
    type Review {
        id: ID!,
        date: String!,
        title: String!,
        comment: String!,
        rating: Int,
        productId: ID!,
    }
    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }
`

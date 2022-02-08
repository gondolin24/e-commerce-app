const {gql} = require("apollo-server");
exports.typeDefs = gql`
    type Mutation {
        addCategory(input: AddCategoryInput): Category!
        addProduct(input: AddProductInput): Product!
        addReview(input: AddReviewInput): Review!
        deleteCategory(id: ID): Boolean
        deleteProduct(id: ID): Boolean
        deleteReview(id: ID): Boolean
        updateCategory(id:ID!, input: updateCategoryInput!): Category
    }
    
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
     input  AddCategoryInput {
         name: String
     },
    input AddProductInput {
        name: String!,
        price: Float,
        onSale: Boolean!,
        quantity: Int!,
        categoryId: String!,
        image: String!
    },
    input AddReviewInput {
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
        productId: ID!,
    }
    input updateCategoryInput {
        name: String!
    }
    
`

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        SavedBook: [Book]
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    input SavedBook {
        title: String
        description: String
        authors: [String]
        bookId: String
        image: String
        link: String
        forSale: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SavedBook!): User
        removeBook(bookId: ID!): User
    }
    `;

    module.exports = typeDefs;
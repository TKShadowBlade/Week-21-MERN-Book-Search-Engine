import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login($email, password: $password) {
        token
        user {
            _id
        }
    }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email, password: $password) {
        token
        user {
            _id
            username
            }
        }
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($input: SavedBook!) {
    saveBook(input: $input) {
        username
        email
        bookCount
        savedBooks {
            # _id
            title
            description
            authors
            bookId
            image
            link
            forSale
        }
    }
}`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                # _id
                title
                description
                authors
                bookId
                image
                link
                forSale
            }

        }
    }`;
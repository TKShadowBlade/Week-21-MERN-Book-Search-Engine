import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
        _id
        username
        email
        bookCount
        savedBooks {
                title
                description
                authors
                bookId
                image
                link                
        }
    }
}
`;
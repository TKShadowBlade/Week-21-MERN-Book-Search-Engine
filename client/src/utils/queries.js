import gql from 'graphgl-tag';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        SavedBook {
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
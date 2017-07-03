import { gql } from 'react-apollo';
export const Products = gql`
{
    products {
        _id
        name
        brand
        imageUrl
        price
        discountPrice
        description
        reviewers
    }
    cartList {
        _id
        name
        brand
        imageUrl
        price
        discountPrice
        description
        reviewersInfo {
            firstName
            lastName
            email
        }
    }
}`
import { gql } from 'react-apollo';
export const Cart = gql`
{
    cartList {
        _id
        name
        brand
        imageUrl
        price
        discountPrice
        description
        reviewers
    }
}`

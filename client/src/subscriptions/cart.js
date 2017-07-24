import { gql } from 'react-apollo';
export const productAdded = gql`
  subscription ProductAdded {
    productAdded {
        _id
        name
        brand
        imageUrl
        price
        discountPrice
        description
        reviewers
    }
  }
`
import { gql } from 'react-apollo';
export const AddToCart = gql`
    mutation AddToCart ($name: String,
            $brand: String,
            $imageUrl: String,
            $price:String,
            $discountPrice:String,
            $description:String,
            $reviewers : [String]) {
        addToCart(
            name: $name,
            brand: $brand,
            imageUrl: $imageUrl,
            price: $price,
            description:$description,
            discountPrice:$discountPrice,
            reviewers : $reviewers){
                name
                brand
                imageUrl
                price
                description
                discountPrice
                reviewers
            }
    }
`

export const RemoveFromCart = gql`
    mutation RemoveFromCart ($_id: String) {
        removeFromCart(
            _id: $_id){
                _id
            }
    }
`

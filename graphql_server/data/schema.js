const typeDefinitions = `
      type Query {
        product(_id: String): Product,
        products: [Product],
        reviewers: [Reviewer]
        reviewer(_id: String): Reviewer,
        cartList : [Cart],
        cart(_id: String): Cart,
        posts: [Post],
        post(id: String): Post,
        users: [User],
        user(id: String): User
    }
    
    type Reviewer {
        _id: String,
        firstName : String,
        lastName: String,
        email: String
    }

    type Product {
        _id: String,
        name: String,
        brand: String,
        imageUrl: String,
        price: String,
        discountPrice: String,
        description: String,
        reviewers : [String],
        reviewersInfo: [Reviewer]
    }

    type Cart {
      _id: String,
        name: String,
        brand: String,
        imageUrl: String,
        price: String,
        discountPrice: String,
        description: String,
        reviewers : [String],
    }

    type Comment {
        postId: String,
        id: String,
        name: String,
        email: String,
        body: String
    }

    type User {
        id: String,
        name: String,
        username: String,
        email: String,
        phone: String
    }

    type Post {
        id: String,
        title: String,
        body: String,
        userId: String,
        commments: [Comment],
        user: User

    }
    type Mutation {
      addToCart (
        name: String,
        brand: String,
        imageUrl: String,
        price:String,
        description:String,
        discountPrice:String,
        reviewers : [String]) : Cart

      removeFromCart (
        _id: String
      ) : Cart

      removeAll (
        _id: String
      ) : Cart
    }
    schema {
        query: Query,
        mutation: Mutation
    }
`;

export default [typeDefinitions];

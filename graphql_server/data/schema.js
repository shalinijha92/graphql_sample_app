const typeDefinitions = `
      type Query {
        product(_id: String): Product,
        products: [Product],
        reviewers: [Reviewer]
        reviewer(_id: String): Reviewer,
        cartList : [Cart],
        cart(_id: String): Cart,
        posts: [Post],
        post(id: Int!): Post,
        users: [User],
        user(id: Int!): User
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
        reviewersInfo: [Reviewer]
    }

    type Comment {
        postId: String,
        id: String,
        name: String,
        email: String,
        body: String
    }

    type User {
        id: Int!,
        name: String,
        username: String,
        email: String,
        phone: String
    }

    type Post {
        id: Int!,
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

      addPost (
            title: String,
            body: String,
            userId: Int!
      ) : Post
      updatePost (
            title: String,
            body: String,
            id: Int!
      ) : Post
    }
    type Subscription {
        productAdded : Cart
    }
    schema {
        query: Query,
        mutation: Mutation,
        subscription: Subscription
    }
`;

export default typeDefinitions;

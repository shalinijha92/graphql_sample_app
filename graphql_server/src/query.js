import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema, GraphQLNonNull } from "graphql";
import fetch from 'node-fetch';

import { Cart, Products, Reviewers } from '../data/connectors';

export const CommentType = new GraphQLObjectType({
    name: 'CommentType',
    fields: () => ({
        id: {type: GraphQLID},
        postId: {type: GraphQLID},
        name: { type: GraphQLString },
        body: { type: GraphQLString }
    })
})

export const PostType = new GraphQLObjectType({
  name:  'PostType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: {type: GraphQLString },
    comments : {
        type: new GraphQLList(CommentType),
        resolve({id}) {
            return ( fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json()))
        }
    }
  })
});


export const Reviewer = new GraphQLObjectType({
  name: 'Reviewer',
  fields: () => ({
    _id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})

export const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    _id: {type: GraphQLID},
    name: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    brand: {type: GraphQLString},
    price: {type: GraphQLString},
    discountPrice: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});


export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    posts: {
      type: new GraphQLList(PostType),
      resolve() {
        return ( fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()));
      }
    },
    post: {
      type: PostType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return ( fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()));
      }
    },

    cartList: {
      type : new GraphQLList(ProductType),
      resolve() {
        return  Cart.find({});
      }
    },
    products: {
      type : new GraphQLList(ProductType),
      resolve() {
        return  Products.find({});
      }
    },
    product: {
      type : ProductType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { _id }) {
        return  Products.findById(_id);
      }
    }
  })
});
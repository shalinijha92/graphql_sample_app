import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema, GraphQLNonNull } from "graphql";
import fetch from 'node-fetch';

const CommentType = new GraphQLObjectType({
    name: 'CommentType',
    fields: () => ({
        id: {type: GraphQLID},
        postId: {type: GraphQLID},
        name: { type: GraphQLString },
        body: { type: GraphQLString }
    })
})

const PostType = new GraphQLObjectType({
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

const RootQuery = new GraphQLObjectType({
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
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
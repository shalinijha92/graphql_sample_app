import { Products, Reviewers, Cart } from './connectors';
import fetch from 'node-fetch';
import { PubSub, withFilter } from 'graphql-subscriptions';
const pubsub = new PubSub();

const resolvers = {
      Query: {
        product: async (root, {_id}) => {
          return (await Products.findById(_id));
        },
        products: async () => {
          return (await Products.find({}));
        },
        cartList: async () => {
          return (await Cart.find({}));
        },
        cart: async (root, {_id}) => {
          return (await Cart.findById(_id));
        },
        reviewers: async () => {
          return (await Reviewers.find({}));
        },
        reviewer: async (root, {_id}) => {
          return (await Reviewers.findById(_id));
        },
        posts : async () => {
          return (await fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()));
        },
        post : async (root, id) => {
          console.log(id)
          return (await fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}`).then(res => res.json()));
        },
        users : async () => {
          return (await  fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json()));
        },
        user : async (root, id) => {
          return (await fetch(`https://jsonplaceholder.typicode.com/users/${id.id}`).then(res => res.json()));
        }
      },
      Product: {
        reviewersInfo : async ({reviewers}) => {
          return (await Reviewers.find({_id: {$in: reviewers}}));
        }
      },
      Cart: {
        reviewersInfo : async ({reviewers}) => {
          return (await Reviewers.find({_id: {$in: reviewers}}));
        }
      },
      Post: {
        commments: async ({id}) => {
          return (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json()))
        },
        user : async ({userId}) => {
          return (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json()))
        }
      },
      Mutation : {
        addToCart : async (root, args, context, info) => {
          const data = new Cart(args)
          return (await data.save().then((resp) => {
            pubsub.publish('productAdded', { productAdded: resp._id });
            return resp;
          }))
        },
        removeFromCart : async (root, args) => {
          return (await Cart.findByIdAndRemove(args._id).exec());
        },
        removeAll : async (root, args) => {
          return (await Cart.remove({}).exec());
        },
        addPost : async (root, args) => {
          const payload = {data: args}
          return (await fetch('http://jsonplaceholder.typicode.com/posts', { method: 'POST', body: payload }).then(res => res.json()))
        },
        updatePost : async (root, args) => {
          const payload = {data: args}
          return (await fetch(`http://jsonplaceholder.typicode.com/posts/${args.id}`, { method: 'PUT', body: payload }).then(res => res.json()))
        }
      },
      Subscription: {
        productAdded: {
          subscribe: () => withFilter(
            () => pubsub.asyncIterator('productAdded'),
            (payload, variables) => {
              console.log(payload);
              return payload.channelId === variables.channelId;
            }
          ),
          
          resolve: (payload) => {
            console.log(payload)
            return {
              customData: payload,
            };
          },
        },
      }
      
    }

export default resolvers;

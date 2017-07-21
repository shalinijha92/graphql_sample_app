import  graphql from 'graphql';
import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

import { ProductType } from './query';
import { Cart, Products, Reviewers } from '../data/connectors';
import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addProduct: {
            type: ProductType,
            args: {
                name: {type: GraphQLString},
                brand: {type: GraphQLString},
                imageUrl: {type: GraphQLString},
                price: {type: GraphQLString},
                description: {type: GraphQLString},
                discountPrice: {type: GraphQLString},
            },
            resolve (parentValue, {name, brand, imageUrl, price, description, discountPrice}) {
                const data = new Cart( {name, brand, imageUrl, price, description, discountPrice} );
                return data.save()
                .then ((resp) => {
                    pubsub.publish('productAdded', { productAdded: resp });
                    return resp;
                });
            }
        },

        removeFromCart : {
            type: ProductType,
            args: {
                _id: {type: GraphQLID},
            },
            resolve (parentValue, {_id}) {
                return Cart.findByIdAndRemove(_id).exec()
            }
        },

        removeAll : {
            type: GraphQLString,
            resolve () {
                return Cart.remove({}).exec();
            }
        }
     }
})

export default mutation;
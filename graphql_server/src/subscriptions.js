import  graphql from 'graphql';
import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import { PubSub, withFilter } from 'graphql-subscriptions';

import { ProductType } from './query';


const subscription = new GraphQLObjectType( {
    name: "Subscription",
    fields: {
        productAdded : {
            type: ProductType,
            subscribe: () => withFilter(
                () => pubsub.asyncIterator('productAdded'),
                (payload, variables) => {
                    console.log(payload);
                    return payload._id === variables._id;
                }
            )
        }
    }
});

export default subscription;

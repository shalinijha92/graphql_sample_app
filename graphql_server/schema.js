
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefinitions from './data/schema';
import Resolver from './data/resolvers';

const schema = makeExecutableSchema({
    typeDefinitions,
    Resolver
})
export default schema;
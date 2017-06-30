
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefinitions from './data/schema';
import resolvers from './data/resolvers';

const schema = makeExecutableSchema({
    typeDefs: typeDefinitions,
    resolvers
});

export default schema;
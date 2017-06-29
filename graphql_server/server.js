import express from 'express';
import { apolloServer } from 'graphql-tools';
import Cors from 'cors';
import Schema from './data/schema';
import Resolvers from './data/resolvers';


const GRAPHQL_PORT = 8080;

var graphQLServer = express();
graphQLServer.use(Cors());
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));

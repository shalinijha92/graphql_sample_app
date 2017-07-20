// import express from 'express';
// import { apolloServer } from 'graphql-tools';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { execute, subscribe } from 'graphql';
// import {
//   graphqlExpress,
//   graphiqlExpress,
// } from 'graphql-server-express';
// import bodyParser from 'body-parser';
// import { createServer } from 'http';
// import Cors from 'cors';
// import schema from './schema';


// const GRAPHQL_PORT = 4000;

// var graphQLServer = express();
// graphQLServer.use(Cors());

// graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
//   schema
// }));

// const subscriptionServer = SubscriptionServer.create(
//   {
//     schema,
//     execute,
//     subscribe,
//   },
//   {
//     server: graphQLServer,
//     path: '/subscriptions',
//   },
// );
// graphQLServer.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql',
//   subscriptionsEndpoint: `ws://localhost:${GRAPHQL_PORT}/subscriptions`
// }));

// const ws = createServer(graphQLServer);
// ws.listen(GRAPHQL_PORT, () => {
//   console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`);
//   subscriptionServer
// });

// Update version of apollo-server-express
import Cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress,graphiqlExpress } from 'apollo-server-express';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

import Schema from './data/schema';
import resolvers from './data/resolvers';
import schema from './src/schema'

const GRAPHQL_PORT = 8080;
var graphQLServer = express();
const executableSchema = makeExecutableSchema({
  typeDefs:Schema,
  resolvers,
});

const subscriptionServer = SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: graphQLServer,
    path: '/subscriptions',
  },
);
graphQLServer.use(Cors());
graphQLServer.use('/graphql',bodyParser.json(), graphqlExpress({
  schema
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${GRAPHQL_PORT}/subscriptions`
}));


graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
), subscriptionServer);
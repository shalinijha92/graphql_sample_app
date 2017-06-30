import {
    graphql,
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema
} from 'graphql';
import schema from '../schema';
import {
    Products,
} from '../data/connectors';
import {
  setupTest

} from '../helper';

//beforeEach(async() => await setupTest());

it('should the list of products', async () => {
    const query = `query posts {
        title
        body
    }`;

    const rootValue ={};


    const result = await graphql(schema, query, rootValue);

    const {data} = result;
    expect(data).toBeDefined();

})
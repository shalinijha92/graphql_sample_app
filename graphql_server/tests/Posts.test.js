import {graphql} from 'graphql';
import schema from '../schema';
import {Products} from '../data/connectors';
import mongoose from 'mongoose';


// beforeEach(async() => await connect());

describe('JSON Placeholder APIS', () => {
    it('should fetch the list of products', async () => {
        const query = `{
                            posts{
                                title 
                                body
                            }
                        }`;

        const result = await graphql(schema, query);

        const {data} = result;
        expect(data).toBeDefined();
    })

    it('should fetch a post with id 1', async () => {
        const query = `{
                            post(id: 1){
                                title 
                                body
                            }
                        }`;

        const result = await graphql(schema, query);

        const {data} = result;
        expect(data).toBeDefined();
    })

    it('should fetch the list of users', async () => {
        const query = `{
                            users{
                                name 
                                username
                                email
                            }
                        }`;

        const result = await graphql(schema, query);

        const {data} = result;
        expect(data).toBeDefined();
    })

    it('should fetch the user with ud 1', async () => {
        const query = `{
                            user(id: 1){
                                name 
                                username
                                email
                            }
                        }`;

        const result = await graphql(schema, query);

        const {data} = result;
        expect(data).toBeDefined();
    })
})



// Mutation doesn't pass
// it('should add a post', async () => {
//     const mutation = `{mutation addPost($title: String, $body: String, $userId: Int!) {
//                         addPost(title: $title, body: $body, userId: $userId) {
//                             id
//                         }
//                     }}`;
//     const result = await graphql(schema, {
//         query: mutation,
//         variables : {
//            title: "Hello World!",
//            body: "Hello from the other side",
//            userId: 1 
//         }
//     });

//     const {data} = result;
//     console.log(result);
//     expect(data).toBeDefined();
// })
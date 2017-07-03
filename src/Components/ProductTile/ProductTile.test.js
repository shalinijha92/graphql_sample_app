import { mount } from 'enzyme';
import React from 'react';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import ProductTile from './ProductTile';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
});
describe('<ProductTile />', () => {
    let product = {
            "_id": "594a418220ac521cd853efda",
            "name": "iPhone 5s",
            "brand": "Apple",
            "imageUrl": "http://lorempixel.com/200/400/technics/",
            "price": "$150.00",
            "discountPrice": "$75.99",
            "description": "awesomatic of the aromalematic",
            "reviewers": [
            "594a1d4faddae23e94665968",
            "594a1fe2addae23e9466596a"
            ]
        };

    const wrapper = mount(
        <ApolloProvider client= {client} >
            <ProductTile item={product}/>
        </ApolloProvider>
    );

    it('should render <ProductTile /> component without crashing', () => {
        expect(wrapper.find('.product-tile').length).toEqual(1);
    })
})
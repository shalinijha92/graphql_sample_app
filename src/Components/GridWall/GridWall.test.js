import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import GridWall from './GridWall';
import ProductTileContainer from './../ProductTile/ProductTileContainer'


// jest.dontMock('./GridWall');
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
});

describe('<GridWall />', () => {

    it('should render <ProductTile /> component', () => {
        const productList = [
            {
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
            }];
        const wrapper = mount(
            <ApolloProvider client= {client} >
                <GridWall productList={productList}/>
            </ApolloProvider>
        );
        expect(wrapper.find(ProductTileContainer).length).toBe(1);
        expect(wrapper.find(GridWall).props().productList).toEqual(productList);
    } )
})
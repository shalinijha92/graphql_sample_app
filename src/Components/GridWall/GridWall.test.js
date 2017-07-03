import { mount } from 'enzyme';
import React from 'react';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import GridWall from './GridWall';
import ProductTileContainer from './../ProductTile/ProductTileContainer'


// jest.dontMock('./GridWall');
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
});

describe('<GridWall />', () => {
    let productList = [
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
        },
        {
            "_id": "594a41a927624d17809cd51a",
            "name": "iPhone 5",
            "brand": "Apple",
            "imageUrl": "http://lorempixel.com/200/400/technics/",
            "price": "$120.00",
            "discountPrice": null,
            "description": "awesomatic of the aromalematic",
            "reviewers": [
            "594a1d4faddae23e94665968",
            "594a1fc6addae23e94665969"
            ]
        }];
    const wrapper = mount(
        <ApolloProvider client= {client} >
            <GridWall productList={productList}/>
        </ApolloProvider>
    );

    it('should render two <ProductTileContainer /> components without crashing', () => {
        expect(wrapper.find(ProductTileContainer).length).toBe(2);
        expect(wrapper.find(GridWall).props().productList).toEqual(productList);
    });

    it('should render one <ProductTileContainer />  without crashing', () => {
        productList.pop()
        wrapper.setProps({productList});
        expect(wrapper.find(ProductTileContainer).length).toBe(1)
        expect(wrapper.find(GridWall).props().productList).toEqual(productList);
        expect(wrapper.find(GridWall).props().productList[0].name).toEqual("iPhone 5s");
    });

    it('should not render any  <ProductTileContainer />  without crashing', () => {
        productList.pop();
        wrapper.setProps({productList});
        expect(wrapper.find(ProductTileContainer).length).toEqual(0);
        expect(wrapper.find(GridWall).props().productList.length).toEqual(0);
    });

    it('should render one <ProductTileContainer />  without crashing', () => {
        productList.push(        {
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
        })
        wrapper.setProps({productList});
        expect(wrapper.find(ProductTileContainer).length).toBe(1)
        expect(wrapper.find(GridWall).props().productList).toEqual(productList);
        expect(wrapper.find(GridWall).props().productList[0].name).toEqual("iPhone 5s");
    });
})
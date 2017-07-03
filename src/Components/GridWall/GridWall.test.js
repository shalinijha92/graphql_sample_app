import { shallow, mount, render } from 'enzyme';
import React from 'react';
import GridWall from './GridWall';
import ProductTile from './../ProductTile/ProductTile';

describe('<GridWall />', () => {

    it('should render <ProductTile /> component', () => {
        const productItem = [
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
        const wrapper = shallow( <GridWall productList={productItem}/>);
        const props = wrapper.props();
        console.log(props);
        expect(wrapper.prop('productList')).to.equal(productItem);
    } )
})
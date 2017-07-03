import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import {Products} from './../../queries/products';
import GridWall from './GridWall';

class GridWallContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            this.props.data.loading?<div>Loading!</div>:<GridWall productList={this.props.data.products}/>
        );
    } 
}

export default graphql(Products)(GridWallContainer);
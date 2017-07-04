import React from 'react';
import { graphql } from 'react-apollo';

import {Products} from './../../queries/products';
import GridWall from './GridWall';

const GridWallContainer = (props) => {
    return(
            props.data.loading?<div>Loading!</div>:<GridWall productList={props.data.products}/>
    );
}

export default graphql(Products)(GridWallContainer);
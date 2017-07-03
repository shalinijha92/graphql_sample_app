import  React, {Component} from 'react';
import { graphql } from 'react-apollo';

import {Cart} from './../../queries/cart'
import Header from './Header';

class HeaderContainer extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount () {
        this.props.data.refetch();    
    }

    render() {
        console.log(this.props.data.cartList)
        return (
            this.props.data.loading?<div>Loading!</div>:<Header cartCount={this.props.data.cartList.length}/>
        )
    }
}

export default graphql(Cart)(HeaderContainer);
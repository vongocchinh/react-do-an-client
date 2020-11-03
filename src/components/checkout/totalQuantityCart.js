import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Format from './../../conStans/format';

 class totalQuantityCart  extends Component {
    render() {
        return (
            <>
                {(Format.totalCart(this.props.cartStore))} 
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        cartStore:state.Cart
    }
}
export default (connect(mapStateToProps,null))(totalQuantityCart);
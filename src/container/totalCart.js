import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as Format from './../conStans/format'
 class header extends Component {
    render() {
        var {CartStore}=this.props;
        return (
            <span className="cart-total-main">{Format.totalCart(CartStore)}</span>
        )
    }
    
}
const mapStateToProps=(state)=>{
    return {
        CartStore:state.Cart
    }
}
export default (connect(mapStateToProps,null))(header);
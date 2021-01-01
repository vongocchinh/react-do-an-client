/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import {connect} from 'react-redux';
import CartItem from './../components/cart/cartItem';
import Cart from './../components/cart/cartList';
import * as actions from './../actions/cart';
 class cart extends Component {
    render() {
        var {cartStore}=this.props;
        return (
            <div className="body-product-detail">
                <Cart
                showCart={this.showCart(cartStore)}
            />
            </div>
        )
    }
    showCart=(cart)=>{
        var result='';
        result=cart.map((carts,key)=>{
            return <CartItem
                cart={carts}
                key={key}
                cartT={this.props.cartT}
                cartG={this.props.cartG}
                onDeleteCart={this.props.onDeleteCart}
            />
        });
        
        return result;
    }
    componentDidMount(){
        document.title="Giỏ hàng..."
    }
}
const mapStateToProps=(state)=>{
    return {
        cartStore:state.Cart
    }
}
const dispatchToProps=(dispatch,Props)=>{
    return{
        onDeleteCart:(id)=>{
            dispatch(actions.deleteCart(id));
        },
        cartT:(cartProduct)=>{
            dispatch(actions.cartT(cartProduct));
        },
        cartG:(cartProduct)=>{
            dispatch(actions.cartG(cartProduct));
        }
    }
}
export default (connect(mapStateToProps,dispatchToProps))(cart);
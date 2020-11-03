import React, { Component } from 'react'
import CheckOut from '../components/checkout/checkout';
import CartPayItem from '../components/checkout/checkItem';
import { connect } from 'react-redux';
import * as actionCheckOut from '../actions/checkout';
import * as actionCart from '../actions/cart';
import { Redirect } from 'react-router-dom';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
// import { Dialog } from '@material-ui/core';
// import { DialogContent } from '@material-ui/core';
// import { CircularProgress } from '@material-ui/core';

 class checkout extends Component {
     constructor(props) {
         super(props);
         this.state={
             redirect:false
         }
     }
    render() {
        var {cartStore,CheckOutStoreMessage,ProductStore,User}=this.props;
        
       if(User){
        if(User.email===undefined){
            
        }
       }else{
          return <Redirect to="/loginPage" />
       }
        if(CheckOutStoreMessage.isCheckOutSuccess){
            this.props.resetMessageBill();
            return <Redirect to="/success" />
        }

       
        return (
            <CheckOut
                showCartPay={this.showCartPay(cartStore)}
                cartStore={cartStore}
                FormatCart={this.FormatCart}
                addBill={this.addBill}
                isCheckOutIn={CheckOutStoreMessage.isCheckOutIn}
                ProductStore={ProductStore}
                CheckOutStoreMessage={CheckOutStoreMessage}
            />
        )
    }
    FormatCart=()=>{
        this.props.FormatCart();
    }
    showCartPay=(cart)=>{
        var result='';
        result=cart.map((cart,key)=>{
            return <CartPayItem
                cart={cart}
                key={key}
            />
        })
        return result;
    }
    addBill=(bill)=>{
        var {User}=this.props;
        var billAdd={
            email:bill.email,
            name:bill.name,
            phone:bill.phone,
            address:bill.address,
            tinh:bill.tinh,
            huyen:bill.huyen,
            xa:bill.xa,
            cart:bill.cart,
            userMail:User.email,
            userName:User.displayName,
            uid:User.uid
        }
        this.props.addBill(billAdd);
    }
}
const mapStateToProps=(state)=>{
    return{
        cartStore:state.Cart,
        LoginRequest:state.LoginRequest,
        CheckOutStoreMessage:state.CheckOut,
        ProductStore:state.getFirestore.ordered.products,
        User:state.User
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        FormatCart:()=>{
            dispatch(actionCart.FormatCart());
        },
        addBill:(bill)=>{
            dispatch(actionCheckOut.Bill_FETCH(bill));
        },
        resetMessageBill:()=>{
            dispatch(actionCheckOut.resetMessageBill());
        }
    }
}

export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"products"
    }
]))
(checkout);
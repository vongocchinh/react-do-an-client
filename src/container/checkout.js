import React, { Component } from 'react'
import CheckOut from '../components/checkout/checkout';
import CartPayItem from '../components/checkout/checkItem';

import CheckOutForm from '../components/checkout/checkoutForm';
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
        var {cartStore,CheckOutStoreMessage,ProductStore,User,AddressBill}=this.props;
       if(User){
        if(User.email===undefined){
        }
       }else{
          return <Redirect to="/loginPage" />
       }
        if(CheckOutStoreMessage.isCheckOutSuccess){
            setTimeout(() => {
                this.props.resetMessageBill();
            }, 1000);
            return <Redirect to="/success" />
        }

        return (
            <CheckOut
                checkoutForm={this.checkoutForm(AddressBill,cartStore,CheckOutStoreMessage,ProductStore)}
            />
        )
    }
    checkoutForm=(AddressBill,cartStore,CheckOutStoreMessage,ProductStore)=>{
        return <CheckOutForm 
            AddressBill={AddressBill&&AddressBill}
            showCartPay={this.showCartPay(cartStore)}
            cartStore={cartStore}
            FormatCart={this.FormatCart}
            addBill={this.addBill}
            isCheckOutIn={CheckOutStoreMessage.isCheckOutIn}
            ProductStore={ProductStore}
            CheckOutStoreMessage={CheckOutStoreMessage}
            addAddressBill={this.addAddressBill}
            getAddressBill={this.getAddressBill}
        />
    }
    getAddressBill=()=>{
        var user=JSON.parse(localStorage.getItem('user'));
        if(user){
            // this.props.getAddressBill(user.idUser);
        }
    }
    addAddressBill=(data)=>{
        this.props.addAddressBill(data);
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
    componentDidMount(){
        document.title="Thanh toán...";
        var user=JSON.parse(localStorage.getItem('user'));
        if(user){
            this.props.getAddressBill(user.idUser);
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        cartStore:state.Cart,
        LoginRequest:state.LoginRequest,
        CheckOutStoreMessage:state.CheckOut,
        ProductStore:state.getFirestore.ordered.products,
        User:state.User,
        AddressBill:state.AddressBill
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
        },
        addAddressBill:(data)=>{
            dispatch(actionCheckOut.addAddressBill(data));
        },
        getAddressBill:(id)=>{
            dispatch(actionCheckOut.getAddressBill(id));
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
/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import UserDetail from './../../components/user/uerDetail';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserBill from './../../components/user/userBill';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux'
import * as action from './../../actions/user';
var userLocalStorage=JSON.parse(localStorage.getItem('user'));
// import { Dialog ,DialogContent,CircularProgress} from '@material-ui/core';
 class user extends Component {
    render() {
        var {User,BillStore} =this.props;
        if(!userLocalStorage){
            return <Redirect to="/loginPage" />
        }
        return (
            <>
            <UserDetail 
                User={User}
                showBill={this.showBill(BillStore,userLocalStorage.idUser)}
            /></>
        )
    }
    componentDidMount(){
        this.props.Get_User();
        document.title="account của bạn...";
        this.props.Update_password();
    }
    showBill=(bills,id)=>{
        var result=null;
       if(id){
        if(bills){
            result=bills.map((bill,key)=>{
                if(bill.uid===id){
                    var stt=key;
                    return <UserBill 
                        row={bill}
                        key={key}
                        stt={stt}
                    />
                }
            })
        }
       }else{
            // return <Redirect to="/loginPage" />
       }
        return result;
    }
}
const mapStateToProps=(state)=>{
    return{
        LoginRequest:state.LoginRequest,
        BillStore:state.getFirestore.ordered.bill,
        User:state.User
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        getUser:()=>{
            dispatch(action.USER_GET());
        },
        Get_User:()=>{
            dispatch(action.Get_User());
        },
        Update_password:()=>{
            dispatch(action.UPDATE_PASSWORD());
        }
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"bill"
    }
]))
(user);
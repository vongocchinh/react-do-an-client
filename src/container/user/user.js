/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import UserDetail from './../../components/user/uerDetail';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserDetailItem from './../../components/user/userItem/userDetailItem';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux'
import * as action from './../../actions/user';
// import { Dialog ,DialogContent,CircularProgress} from '@material-ui/core';
 class user extends Component {
    render() {
        var {User,BillStore} =this.props;
        if(User){
                if(User.uid===null||User.uid===''||User.uid===undefined||typeof User.email===undefined||User.email===''||User.email===undefined){
                    return <Redirect to="/loginPage" />
                }
        }else if(User===null){

                return <Redirect to="/loginPage" />
        }
     
        return (
            <>
             
            <UserDetail 
                User={User}
                showBill={this.showBill(BillStore,User.uid)}
            /></>
        )
    }
    componentDidMount(){
        this.props.getUser();
    }
    showBill=(bills,id)=>{
        var result=null;
       if(id){
        if(bills){
            result=bills.map((bill,key)=>{
                if(bill.uid===id){
                    var stt=key;
                    return <UserDetailItem 
                        row={bill}
                        key={key}
                        stt={stt}
                    />
                }
            })
        }
       }else{
            return <Redirect to="/loginPage" />
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
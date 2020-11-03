import React, { Component } from 'react'
import Password from './../../components/password/password';
import { connect } from 'react-redux';
import * as action from '../../actions/user';
import { Redirect } from 'react-router-dom';
// import { DialogContent,CircularProgress,Dialog } from '@material-ui/core';
import {toast} from 'react-toastify';
class password extends Component {
    render() {
        var {MessageResetPassWord}=this.props;
       
        if(MessageResetPassWord.isResetPasswordSuccess){
            toast.success('Check Pass Success !!! ');
            return <Redirect to="/loginPage" />
        }
        if(MessageResetPassWord.isResetPasswordError){
            toast.error('Check Pass Failed .vui lòng nhập lại tên tài khoản !!!');
            
        }
        setTimeout(() => {
            this.props.resetMessagePassword();
        }, 2000);
        return (
            <Password
                resetPassword={this.resetPassword}
                MessageResetPassWord={MessageResetPassWord}
            />
        )
    }
    
    resetPassword=(email)=>{
        this.props.resetPassword(email);
    }
}
const mapStateToProps=(state)=>{
    return{
        MessageResetPassWord:state.MessageResetPassWord
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        resetPassword:(email)=>{
            dispatch(action.ResetPass_request(email));
        },
        resetMessagePassword:()=>{
            dispatch(action.ResetMessagePassword());
        }
    }
}

export default (connect(mapStateToProps,dispatchToProps))(password);
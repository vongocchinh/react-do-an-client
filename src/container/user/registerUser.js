import React, { Component } from 'react'
import Register from './../../components/login/register';
import { connect } from 'react-redux';
import * as action from './../../actions/user';
import { Redirect } from 'react-router-dom';
 class registerUser extends Component {
    render() {
        var {RegisterRequest}=this.props;
        if(RegisterRequest.isRegisterSuccess){
            return <Redirect to="/loginPage" />
        }
        setTimeout(() => {
            this.props.resetRegister();
        }, 2000);
        return (
            
                <Register
                    register={this.register}
                    RegisterRequest={RegisterRequest}
                />
            
        )
    }
    register=(user)=>{
        this.props.register(user);
    }
}

const mapStateToProps=(state)=>{
    return{
        RegisterRequest:state.RegisterRequest
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        register:(user)=>{
            dispatch(action.registerUserRequest(user));
        },
        resetRegister:()=>{
            dispatch(action.resetRegister());
        }
    }
}
export default (connect(mapStateToProps,dispatchToProps))(registerUser);
import React, { Component } from 'react'
import Login from './../../components/login/login';
import { connect } from 'react-redux';
import * as actions from './../../actions/user';
import { Redirect } from 'react-router-dom';
 class login extends Component {
   constructor(props) {
       super(props);
       this.state={
           Redirect:false,
           displayName:''
       }
   }
    render() {
        var {LoginRequest}=this.props;
        if(LoginRequest.isLoggingSuccess===true){
            return <Redirect to="/" />
        }
        if(this.state.displayName){
            return <Redirect to="/user" />
        }
        return (
            <Login
                login={this.loginForm}
                isLoggingIn={LoginRequest.isLoggingIn}
                isLoggingSuccess={LoginRequest.isLoggingSuccess}
                loginError={LoginRequest.loginError}
                ResetPass={this.ResetPass}
            />
        )
    }
    ResetPass=()=>{
        this.props.ResetPass();
    }
    loginForm=(login)=>{
        this.props.login(login);
    }
    componentDidMount(){
        this.setState({
            LoginRequest:this.props.Logging
        });
        var user=JSON.parse(localStorage.getItem('user'));
        if(user){
            if(user.displayName){
                this.setState({
                    displayName:user.displayName
                });
             }
        }else{
            return <Redirect to="/loginPage" />
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        userStore:state.User,
        LoginRequest:state.LoginRequest,

    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        login:(login)=>{
            dispatch(actions.loginUser_request(login));
        },
        ResetPass:()=>{
            dispatch(actions.ResetPass_request());
        }
    }
}
export default  (connect(mapStateToProps,dispatchToProps))(login);
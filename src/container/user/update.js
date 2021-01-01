import React, { Component } from 'react'
import UserEdit from './../../components/user/userEdit';
import { connect } from 'react-redux';

import * as action from './../../actions/user';
 class update extends Component {
    render() {
        var {User,LoginRequest}=this.props;
        if(LoginRequest.isUpdateSuccess){
            window.location.reload();
        }
        return (
            <UserEdit 
                User={User}
                updateUser={this.updateUser}
                LoginRequest={LoginRequest}
                updateImagesUser={this.updateImagesUser}
            />
        )
    }
    updateUser=(user)=>{
        this.props.updateUser(user);
    }
    componentDidMount(){
        this.props.Get_User();
    }
    updateImagesUser=(user)=>{
        this.props.updateImagesUser(user);
    }
}
const mapStateToProps=(state)=>{
    return{
        User:state.User,
        LoginRequest:state.LoginRequest
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        updateUser:(user)=>{
            dispatch(action.updateUser_request(user));
        },
        Get_User:()=>{
            dispatch(action.Get_User());
        },
        updateImagesUser:(user)=>{
            dispatch(action.updateImagesUser_request(user));
        }
    }
}
export default 
connect(mapStateToProps,dispatchToProps)
(update);

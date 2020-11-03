import React, { Component } from 'react'
import UserEdit from './../../components/user/userEdit';
import { connect } from 'react-redux';

import * as action from './../../actions/user';
 class update extends Component {
    render() {
        
        var {User,LoginRequest}=this.props;
        return (
            <UserEdit 
                User={User}
                updateUser={this.updateUser}
                LoginRequest={LoginRequest}
            />
        )
    }
    updateUser=(user)=>{
        this.props.updateUser(user);
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
        }
    }
}
export default 
connect(mapStateToProps,dispatchToProps)
(update);

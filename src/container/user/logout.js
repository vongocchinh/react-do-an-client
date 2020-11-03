import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from './../../actions/user';
import { Redirect } from 'react-router-dom';
import  Dialog  from '@material-ui/core/Dialog';
import  DialogContent  from '@material-ui/core/DialogContent';
import  CircularProgress  from '@material-ui/core/CircularProgress';
 class logout extends Component {
    render() {
        var {LogoutStore}=this.props;
        if(LogoutStore.isLoggingOut){
           
            return <Dialog open={LogoutStore.isLoggingOut}  aria-labelledby="form-dialog-title">
                        <DialogContent style={{display:"flex",justifyContent:"center"}}>
                            <CircularProgress color="secondary" />
                        </DialogContent>
                    </Dialog>
        }
       
        if(LogoutStore.isVerifying){
            return <Redirect to="/loginPage" />
        }
        if(LogoutStore.logoutError){
            return <Redirect to="/user" />
        }
        return (
            <div></div>
        )
    }
    componentDidMount(){
        this.logout();
    }
    logout=()=>{
        this.props.logout();
    }
}
const mapStateToProps=(state)=>{
    return{
        LogoutStore:state.LoginRequest
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        logout:()=>{
            dispatch(action.LOGOUT_USER_REQUEST());
        }
    }
}
export default 
connect(mapStateToProps,dispatchToProps)
(logout);
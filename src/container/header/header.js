import React, { Component } from 'react'
import Header from '../../components/layout/header';
import { connect } from 'react-redux';
import * as actions from './../../actions/search';
import { Redirect } from 'react-router-dom';
import { to_slug } from './../../conStans/format';
import * as actionUser from './../../actions/user';
// import  Dialog  from '@material-ui/core/Dialog';
// import  DialogContent  from '@material-ui/core/DialogContent';
// import  CircularProgress  from '@material-ui/core/CircularProgress';
class header extends Component {
    render() {
        var {redirect,name}=this.props.Search;
        var {UserOnlineState}=this.props;
        var {LogoutStore}=this.props;
        if(LogoutStore.isLoggingOut){
            // return <Dialog open={LogoutStore.isLoggingOut}  aria-labelledby="form-dialog-title">
            //             <DialogContent style={{display:"flex",justifyContent:"center"}}>
            //                 <CircularProgress color="secondary" />
            //             </DialogContent>
            //         </Dialog>
            window.location.reload();
        }
        // if(LogoutStore.isVerifying){
        //     return <Redirect to="/loginPage" />
        // }
        if(LogoutStore.logoutError){
            return <Redirect to="/user" />
        }
        setTimeout(() => {
            this.props.UserOnline();
        }, 0);
        if(redirect){
            return <Redirect to={"/search-product/"+to_slug(name)+".html"} />
        }
        return (
            <Header 
                search={this.onSearch}
                UserOnline={UserOnlineState}
                logoutUser={this.logoutUser}
            />
        )
    }
    logoutUser=()=>{
        this.props.logoutUser();
    }
    onSearch=(name)=>{
       this.props.onSearch(name);
    }
    componentDidMount(){
        this.props.getUser();
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        onSearch:(name)=>{
            dispatch(actions.PRODUCT_SEARCH(name));
        },
        UserOnline:()=>{
            dispatch(actionUser.getUserOnLine());
        },
        getUser:()=>{
            dispatch(actionUser.USER_GET());
        },
        logoutUser:()=>{
            dispatch(actionUser.LOGOUT_USER_REQUEST());
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        Search:state.Search,
        UserOnlineState:state.UserOnline,
        LogoutStore:state.LoginRequest
    }
}
export default 
connect(mapStateToProps,dispatchToProps)
(header);
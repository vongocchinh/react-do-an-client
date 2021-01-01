import React, { Component } from 'react'
import Header from '../../components/layout/header';
import { connect } from 'react-redux';
import * as actions from './../../actions/search';
import { Redirect } from 'react-router-dom';
// import { to_slug } from './../../conStans/format';
import * as actionUser from './../../actions/user';
import { toast } from 'react-toastify';
import * as actionViewPage from '../../actions/viewPage';
import * as actionCheckout from '../../actions/checkout';
class header extends Component {
    render() {
        
        var {redirect}=this.props.Search;
        if(redirect===true){
            return <Redirect to={"/product-search"} />
        }
        var {UserOnlineState,User}=this.props;
        var {LogoutStore}=this.props;
        if(LogoutStore.isVerifying){
            window.location.reload();
            toast.dark("Đăng xuất thành công")
        }
        if(LogoutStore.logoutError){
            return <Redirect to="/user" />
        }
        return (
            <Header 
                search={this.onSearch}
                UserOnline={UserOnlineState}
                logoutUser={this.logoutUser}
                User={User}
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
        if(window.closed){
            localStorage.removeItem('viewIdPage');
        }
        window.addEventListener('beforeunload',()=>{
            localStorage.removeItem('viewIdPage');
        })
        var user=JSON.parse(localStorage.getItem('user'));
        if(user){
            this.props.getAddressBill(user.idUser);
        }
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
            dispatch(actionUser.Get_User());
        },
        logoutUser:()=>{
            dispatch(actionUser.LOGOUT_USER_REQUEST());
        },
        counterViewPage:()=>{
            dispatch(actionViewPage.counterViewPage());
        },
        getAddressBill:(id)=>{
            dispatch(actionCheckout.getAddressBill(id));
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        Search:state.Search,
        UserOnlineState:state.UserOnline,
        LogoutStore:state.LoginRequest,
        User:state.User
    }
}
export default 
connect(mapStateToProps,dispatchToProps)
(header);
import React, { Component } from 'react'

import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet'
import LoginForm from './form/loginFrom';
// import { Button } from '@material-ui/core';
export default class login extends Component {
    componentDidMount(){
        document.title="Login-Đăng nhập | Cửa hàng bán smart phone...";
    }
 
    
    render() {
        return (
            <>
           
            <div>
            <div className="container-main">
                    {/* <div className="cart-top">
                        <Link style={{fontSize:"10px"}}  href="###" className="cart-dh-top">Trang chủ</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
                        <Link href="###" className="cart-dh-top cart-color-EF4339">Đăng nhập</Link>
                    </div> */}
                </div>
                <br/>
               <div className="login-container-main-top">
                    <div className="login-container-main login-container-main-login">
                        <div className="container-main-top">
                            <h3>Chào mừng đến với chúng tôi. Đăng nhập ngay!</h3>
                            <p>Thành viên mới? Đăng kí <Link to="/registerPage" href="register.html">tại đây</Link></p>
                        </div>
                        <LoginForm login={this.props.login}  
                            isLoggingIn={this.props.isLoggingIn}
                            isLoggingSuccess={this.props.isLoggingSuccess}
                            loginError={this.props.loginError}
                            ResetPass={this.props.ResetPass}
                        />
                    </div>
                </div> 
                <div className="clear"></div>
                <br></br>
                
                
            </div>
            </>
        )
    }
}

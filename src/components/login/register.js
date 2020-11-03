import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import RegisterForm from './form/registerForm';
 class register extends Component {
    render() {
        return (
            <div>
            
            <div className="container-main">
                    {/* <div className="cart-top">
                        <Button href="###" className="cart-dh-top">Trang chủ</Button>&nbsp;&nbsp;/&nbsp;&nbsp;
                        <Button href="###" className="cart-dh-top cart-color-EF4339">Đăng kí</Button>
                    </div> */}
                </div>
                <br/>
                <div className="login-container-main-top">
                    <div className="login-container-main login-container-main-register">
                    <div className="container-main-top">
                        <h3>Chào mừng đến với chúng tôi. Đăng kí ngay!</h3>
                        <p>Bạn là thành viên ? Đăng nhập <Link to="/loginPage" href="login.html">tại đây</Link></p>
                    </div>
                        <RegisterForm register={this.props.register} 
                            RegisterRequest={this.props.RegisterRequest}
                        />
                    </div>
                </div>
                <div className="clear"></div>
                <br/>
                
            </div>
        )
    }
}
export default register;
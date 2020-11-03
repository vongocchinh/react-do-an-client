import React, { Component } from 'react'
import PasswordForm from './passwordForm'

export default class password extends Component {
    render() {
        return (
            <div>
            <div className="container-main">
                </div>
                <br/>
               <div className="login-container-main-top">
                    <div className="login-container-main login-container-main-login">
                        <div className="container-main-top">
                            <h2>QUÊN THÔNG TIN TÀI KHOẢN!</h2>
                        </div>
                        <PasswordForm  
                            resetPassword={this.props.resetPassword}
                            MessageResetPassWord={this.props.MessageResetPassWord}
                        />
                    </div>
                </div> 
                <div className="clear"></div>
                <br></br>
                
                
            </div>
        )
    }
}

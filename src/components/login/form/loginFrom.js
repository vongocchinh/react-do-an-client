/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import  DialogContent  from '@material-ui/core/DialogContent';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function FormError(props) {
    if (props.isHidden===false) { return null;}

    return ( <div className="input-error-message">{props.errorMessage}</div>)
}
 class loginFrom extends Component {
    constructor(props) {
        super(props);
        this.state={
            userEmail:'',
            passWord:'',
            redirectLogin:false,
            circularProgressInLogging:this.props.isLoggingIn,
            circularProgressSuccess:this.props.isLoggingSuccess,
            circularProgressLoginFail:false,
            errEmail:{
                emailError:false,
                isInputValidEmail:false,
                errorMessageEmail:''
            }
        }
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const {userEmail,passWord}=this.state;
        var login={
            userEmail,
            passWord
        }
        if(this.state.errEmail.emailError===false){
            this.props.login(login);
        }else{
            toast.dark("Email không hợp lệ.")
        }
        event.target.reset();
    }
    handleCloseCircularProgressLoginFail=()=>{
        this.setState({
            circularProgressLoginFail:false
        });
    }
    ResetPass=()=>{
        this.props.ResetPass();
    }
    validateInputEmail = (checkingText) => {
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const checkingResult = regexp.exec(checkingText);
        console.log(checkingResult);
        if (checkingResult !== null) {
            return { isInputValid: false,
                    errorMessage: '',
                     emailError:false
                    };
        } else {
            return { isInputValid: true,
                    errorMessage: 'Địa chỉ email không hợp lệ.',
                     emailError:true
                    };
        }
    }
    handleInputValidationEmail = event => {
        const { isInputValid, errorMessage,emailError } = this.validateInputEmail(this.state.userEmail);
        this.setState({
            errEmail:{
                isInputValidEmail: isInputValid,
                errorMessageEmail: errorMessage,
                emailError:emailError
            }
        })
    }
    render() {
        var {errEmail}=this.state;
        return (
            <>
            <Dialog open={this.props.isLoggingIn} onClose={this.handleCloseCircularProgressSuccess} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <CircularProgress color="secondary" />
                </DialogContent>
            </Dialog>
            <div className="container-main-form">
                        <form onSubmit={this.onSubmit}>
                        <div className="container-main-form-left">
                            <div className="container-main-form-left-input">

                            {this.props.loginError ?  <Alert severity="error">Đăng nhập thất bại!</Alert>:''}
                            <p className="login-title-from">UserEmail :</p>
                                <input type="text" 
                                placeholder="Email..." 
                                required name="userEmail" 
                                onChange={this.onChange} 
                                onBlur={this.handleInputValidationEmail}
                                className={errEmail.emailError===true?"login-container-form-left-input-error" : "login-container-form-left"}
                                />
                                <FormError 
                                    isHidden={errEmail.isInputValidEmail} 
                                    errorMessage={errEmail.errorMessageEmail} />
                            <p className="login-title-from login-title-from-padding">PassWord :</p>
                                <input minLength={6} type="password" 
                                required name="passWord" onChange={this.onChange} 
                                className="login-container-form-left"  
                                placeholder="PassWord"

                                />
                            <div className="login-pass-form">
                                <Link to="/reset-password" href="###" className="login-pass-form-a">Quên Mật Khẩu?</Link>
                            </div>
                            </div>
                        </div>
                        <div className="container-main-form-right">
                            <div className="container-main-form-right-submit">
                            {/* <input value="Đăng Nhập" type="submit" className="login-form-right-submit" /> */}
                            <Button type="submit"  variant="contained" color="default" className="login-form-right-submit">Đăng Nhập</Button>
                            <a href="###" className="login-form-right-login-different">Hoặc Đăng Nhập với</a>
                            <Button  variant="contained" color="primary" className="login-redirect-form"><i className="fa fa-facebook" />&nbsp;FaceBook</Button>
                            <Button variant="contained" color="secondary" className="login-redirect-form gg"><i className="fa fa-google" />&nbsp;Google</Button>
                            </div>
                        </div>
                        </form>
                    </div>
            </>
        )
    }
}


export default (loginFrom);
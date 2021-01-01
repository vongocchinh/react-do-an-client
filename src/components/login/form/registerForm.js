/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import  DialogContent  from '@material-ui/core/DialogContent';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify';
function FormError(props) {
    if (props.isHidden===false) { return null;}

    return ( <div className="input-error-message">{props.errorMessage}</div>)
}
export default class registerForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            userEmail:'',
            passWord:'',
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
    onSubmit=(e)=>{
        e.preventDefault();
        const {userEmail,passWord}=this.state;
        var user={
            userEmail,
            passWord,
           
        }
       if(this.state.errEmail.emailError===false){
        this.props.register(user);
       }else{
           toast.dark("Địa chỉ email không hợp lệ.")
       }
        this.resetForm();
        e.target.reset();
    }
    resetForm=()=>{
        this.setState({
            userEmail:'',
            passWord:'',
        });
    }
    validateInputEmail = (checkingText) => {
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const checkingResult = regexp.exec(checkingText);
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
            <Dialog open={this.props.RegisterRequest.isRegisterRequest}  aria-labelledby="form-dialog-title">
                <DialogContent>
                    <CircularProgress color="secondary" />
                </DialogContent>
            </Dialog>
            <div className="container-main-form">
                        <form onSubmit={this.onSubmit}>
                        <div className="container-main-form-left">
                            <div className="container-main-form-left-input">
                            {this.props.RegisterRequest.isRegisterError ? <Alert severity="error">This is logging error  — check in passWord and mail!</Alert>:''}
                            <p className="login-title-from">UserEmail:</p>
                            <input placeholder="Email..." 
                            type="text" required name="userEmail" 
                            onChange={this.onChange} 
                            onBlur={this.handleInputValidationEmail}
                            className={errEmail.emailError===true?"login-container-form-left-input-error" : "login-container-form-left"}
                             />
                            <FormError 
                                    isHidden={errEmail.isInputValidEmail} 
                                    errorMessage={errEmail.errorMessageEmail} />
                            <p className="login-title-from login-title-from-padding">PassWord:</p>
                            <input placeholder="PassWord" type="password" minLength={6} required name="passWord" onChange={this.onChange} className="login-container-form-left" />
                            </div>
                        </div>
                        <div className="container-main-form-right container-main-form-right-register">
                            <div className="container-main-form-right-submit">
                            <Button type="submit"  variant="contained" color="default" className="login-form-right-submit">Đăng Ký</Button>
                            <a href="###" className="login-form-right-login-different">Hoặc Đăng Kí với</a>
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

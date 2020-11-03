import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import  DialogContent  from '@material-ui/core/DialogContent';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
export default class registerForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            userEmail:'',
            passWord:''
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
        this.props.register(user);
        this.resetForm();
        e.target.reset();
    }
    resetForm=()=>{
        this.setState({
            userEmail:'',
            passWord:'',
        });
    }
    render() {
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
                            <input placeholder="UserName/Email/NumberPhone" type="text" required name="userEmail" onChange={this.onChange} className="login-container-form-left" />
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

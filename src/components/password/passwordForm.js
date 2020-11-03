import React, { Component } from 'react'
import {toast} from 'react-toastify';
import { DialogContent,CircularProgress,Dialog } from '@material-ui/core';

// import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
 class loginFrom extends Component {
     constructor(props) {
         super(props);
         this.state={
             email:'',
             code:'',
             str:'',
             openDialog:this.props.MessageResetPassWord.isResetPasswordError
         }
     }
     onChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         });
     }
     onSubmit=(e)=>{
        e.preventDefault();
        var {code,str,email}=this.state;
        
       
        if(code===str){
           this.props.resetPassword(email);
        }else{
            toast.warning('Mã code không đúng !!!');
            var strNew=Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, 6);
            this.setState({
                str:strNew
            });
        }
        
        e.target.reset();
    }
   
    componentDidMount(){
        var str=Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, 6);
        this.setState({
            str:str
        });
    }
    handleCloseDialog=()=>{
        this.setState({
            openDialog:false
        });
    }
    handleCloseDialogCancel=()=>{
        this.setState({
            openDialog:false
        });
    }
    render() {
       
        var {str}=this.state;        
        var {MessageResetPassWord}=this.props;
        
        return (
            <>
            <Dialog open={MessageResetPassWord.isResetPasswordRequest} onClose={this.handleCloseCircularProgressSuccess} aria-labelledby="form-dialog-title">
                        <DialogContent>
                            <CircularProgress color="secondary" />
                        </DialogContent>
            </Dialog>
            <div className="container-main-form">
                        <form onSubmit={this.onSubmit}>
                        <div className="container-main-form-left">
                            <div className="container-main-form-left-input">
                            <p className="login-title-from">Tên đăng nhập :</p>
                                <input type="text" placeholder="UserName/Email/NumberPhone"  required name="email" onChange={this.onChange} className="login-container-form-left" />
                                <div className="login-pass-form">
                                    <br/>
                                    <p className="login-title-from"> Mã kiểm tra: 
                                        <span style={{color:"red",fontSize:"18px",marginRight:"20px"}}>
                                        &nbsp;
                                            {str}</span>
                                        </p>
                                    <br/>
                                    <p className="login-title-from"> Nhập mã kiểm tra:</p>
                                    <div>
                                        <input maxLength="6" type="text" style={{width:"60px",float:"left"}} placeholder="*******" required name="code" onChange={this.onChange} className="login-container-form-left" />
                                        <Button type="submit" style={{width:"200px",float:"right",marginTop:"2.5px"}}  variant="contained" color="default" className="login-form-right-submit">Xác Nhận</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-main-form-right">
                            <div className="container-main-form-right-submit">
                            <br/>
                            </div>
                        </div>
                        </form>
                    </div>
            </>
        )
    }
}


export default (loginFrom);
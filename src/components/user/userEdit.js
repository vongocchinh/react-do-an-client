import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import  Dialog  from '@material-ui/core/Dialog';
import  DialogContent  from '@material-ui/core/DialogContent';
import  CircularProgress  from '@material-ui/core/CircularProgress';

export default class userEdit extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayName:'',
            email:'',
            phoneNumber:'',
            na:'',
            uid:'',
        };
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const {displayName,
            email,
            phoneNumber,
            na,uid}=this.state;
        var userNew={
            displayName,
            email,
            phoneNumber,
            na,uid
        }
        this.props.updateUser(userNew);
        this.Format();
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    UNSAFE_componentWillMount(){
        var {User}=this.props;
        if(User){
            this.setState({
                displayName:User.displayName,
                email:User.email,
                phoneNumber:User.phoneNumber,
                na:User.na,
                uid:User.uid,
            });
        }else{
            this.Format();
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.User){
            this.setState({
                displayName:nextProps.User.displayName,
                email:nextProps.User.email,
                phoneNumber:nextProps.User.phoneNumber,
                na:nextProps.User.na,
                uid:nextProps.User.uid,
            });
        }else{
            this.Format();
        }
    }
    Format=()=>{
        this.setState({
            displayName:'',
            email:'',
            phoneNumber:'',
            na:'',
            uid:'',
        });
    }
    render() {
        var {displayName,
            email,
            phoneNumber,
            na}=this.state;
           
        return (
            <div>
            <Dialog open={this.props.LoginRequest.isUpdateIn}  aria-labelledby="form-dialog-title">
                <DialogContent>
                    <CircularProgress color="secondary" />
                </DialogContent>
            </Dialog>
            <br/>
            <form onSubmit={this.onSubmit}>
            <div className="user-container-layout">
                <div className="user-container">
                    <div className="user-container-main">
                        <div className="edit-user-container-main-detail">
                            <p className="user-container-title">Thông tin cá nhân | <Link to="/user" href="index.html">Quay Lại</Link></p>
                            <p className="user-container-detail-user-default">Tên:</p>
                            <input onChange={this.onChange} name="displayName" className="edit-user-container-name" value={displayName||''} type="text" />
                            <p className="user-container-detail-user-default">Email:</p>
                            <input onChange={this.onChange} name="email" className="edit-user-container-name" value={email||''} type="text" />
                        </div>
                    </div>
                <div className="user-container-main">
                    <div className="edit-user-container-main-detail">
                        <p className="user-container-title">Sổ địa chỉ | <a href="index.html">Quay Lại</a></p>
                        <p className="user-container-detail-user-default">Địa Chỉ:</p>
                        <input onChange={this.onChange} name="na" className="edit-user-container-name" value={na||''} type="text" />
                        <p className="user-container-detail-user-default">Giới Tính:</p>
                        {/* <select className="edit-user-container-name" value="Giới tính">
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select> */}
                    </div>
                </div>
                <div className="user-container-main">
                    <div className="edit-user-container-main-detail">
                        <p className="user-container-title">Thông tin phone |</p>
                        <p className="user-container-detail-user-default">Số điện thoại:</p>
                        <input onChange={this.onChange} name="phoneNumber" className="edit-user-container-name" value={phoneNumber||''} type="text" />
                        <p className="user-container-detail-user-default">Mã Thuế:</p>
                        <input className="edit-user-container-name"  type="text" />
                        <br/>
                        <input className="edit-user-container-name edit-user-container-name-submit" value="Lưu Chỉnh Sửa" type="submit"></input>
                    </div>
                </div>
                </div>
                <br />
            </div>
            </form>
            <div className="clear"></div>
            <br/>
           
            </div>
        )
    }
}

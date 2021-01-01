/* eslint-disable no-unreachable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Top from './../images/1.jpg';
import Search from './search/search';
import { connect } from 'react-redux';
import TotalCart from '../../container/totalCart';

 class header extends Component {
    constructor(props) {
        super(props);
        this.state={
            redirect:localStorage.getItem('tokenLogin'),
            redirectAdmin:false,
            username:localStorage.getItem('tokenUser')
        }
    }
    componentDidMount(){
        if(this.state.redirect === null){
           this.setState({
               redirectAdmin:true
           });
        }
    }
    logoutUser=()=>{
        this.props.logoutUser();
    }
    showLogin=(user)=>{
        if(user){
            if(user.idUser){
                return (<>
                    <a href="###" onClick={this.logoutUser} id="menu-a" className="menu-in-table">Đăng Xuất</a> <hr/>
    
                </>)
            }
        }
        if(!user){
            return  (<>
                <Link to="/loginPage" id="menu-a"  className="menu-in-table">Đăng Nhập</Link> <hr/>
            </>)
        }
    }
    showLoginWeb=(user)=>{
        if(user){
            if(user.idUser){
                return (<>
                     <a href="###" onClick={this.logoutUser} className="menu-user" ><i className='fas fa-user-lock'></i>&nbsp;&nbsp;Đăng Xuất</a>           
                     </>)
            }
        }
        if(!user){
                return  (<>
                    <Link to="/loginPage" className="menu-user" ><i className='fas fa-user-check'></i>&nbsp;&nbsp;Đăng nhập</Link>
                </>)
        }
    }
    openMenu=()=>{
        document.getElementById('menu').style.width="300px";
    }
    offMenu=()=>{
        document.getElementById('menu').style.width="0px";
    }
    render() {
    //    var UserOnline=this.props.UserOnline;
        var userLocalStorage=JSON.parse(localStorage.getItem('user'));
    //    var {User}=this.props;
        return (
            <div>
                <div className="banner-top">
                    <div className="banner-top-main">
                        <div className="banner-top-left-mail">
                                Email:Ngocchinh1410@gmail.com
                        </div>
                        <div className="banner-top-left-right">
                                Liên hệ:0763717084
                        </div>
                    </div>
                </div>
                <nav className="header">
                    <div className="container">
                        <div className="logo">
                            <div className="open-menu" onClick={this.openMenu}>
                                <span className="open" />
                                <span className="open" />
                                <span className="open" />
                            </div>
                            <Link to="/"><img alt="###" src={Top} className="logo-images" /></Link>
                            <div className="cart-repo">
                                <Link to="/cart" >
                                <i className="fas fa-shopping-cart" />
                                <span className="cart-total">0</span>
                                </Link>
                            </div>
                        </div>
                        <Search search={this.props.search}/>
                        <div className="cart">
                            <div className="hotline user-menu-table"><i className="fas fa-user-alt" />&nbsp;&nbsp;<strong>Tài Khoản</strong>
                                <div className="table-user">
                                    <Link to="/user" className="menu-user" ><i className='far fa-smile'></i>&nbsp;&nbsp;Tài Khoản</Link>
                                    {this.showLoginWeb(userLocalStorage)}
                                </div>
                            </div>
                            <p className="hotline"><TotalCart/><Link to="/cart"   className="a-link-cart"><i className="fas fa-shopping-cart" />&nbsp;&nbsp;<strong>Giỏ Hàng</strong></Link></p>
                        </div>
                    </div>
                    <div className="nav-menu" id="menu">
                        <span  onClick={this.offMenu} className="off-menu">x</span>
                        <div className="menu-slide">
                            <Link to="/" id="menu-a" href="/" className="menu-in-table">Trang Chủ</Link>
                            <hr />
                            <Link to="/user" id="menu-a" href="###" className="menu-in-table">Tài khoản</Link>
                            <hr />
                            {this.showLogin(userLocalStorage)}
                                <a id="menu-a" href="###" className="menu-in-table">Giới Thiệu</a>
                            <hr />
                                <Link to="/category/dienthoai" id="menu-a" href="###" className="menu-in-table">Sản Phẩm</Link>
                            <hr />
                            <a id="menu-a" href="###" className="menu-in-table">Tin Tức</a>
                            <hr />
                                <a id="menu-a" href="###" className="menu-in-table">Liên Hệ</a>
                            <hr />
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default (connect(null,null))(header);
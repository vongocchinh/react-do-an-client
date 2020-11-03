import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import PayTotal from './checkTotal';
import TotalQuantity from './totalQuantityCart';
import  CircularProgress  from '@material-ui/core/CircularProgress';
// import { Redirect } from 'react-router-dom';


 class checkout extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            name:'',
            phone:'',
            address:'',
            tinh:'',
            huyen:'',
            xa:'',
            cart:[],
            redirectBill:false,
            open:false,
            
        }
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmit=(event)=>{
        event.preventDefault();
        
        const {email,name,phone,address,tinh,huyen,xa,cart}=this.state;
        var newBill={
            email:email,
            name:name,
            phone:phone,
            address:address,
            tinh:tinh,
            huyen:huyen,
            xa:xa,
            cart:cart,
           
        }
        // var {ProductStore}=this.props;
        if(this.state.cart.length>0){
            this.props.addBill(newBill);
            this.props.FormatCart();
            this.setState({
                redirectBill:true
            });
         
            
            
        }else{
            this.setState({
                open:!this.state.open
            });
        }
       
        event.target.reset();
    }
    sb=()=>{
        
    }
    componentDidMount(){
        this.setState({
            cart:this.props.cartStore
        });

    }
    render() {
       
        var {isCheckOutIn,CheckOutStoreMessage}=this.props;
        return (
            <div>
            <Dialog open={CheckOutStoreMessage.isCheckOutIn}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>
            <Dialog open={isCheckOutIn} onClose={this.handleCloseCircularProgressSuccess} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <CircularProgress color="secondary" />
                </DialogContent>
            </Dialog>
               
                <div className="container-main">
                    <div className="cart-top">
                        <a href="###" className="cart-dh-top">Trang chủ</a>&nbsp;&nbsp;/&nbsp;&nbsp;
                        <a href="###" className="cart-dh-top cart-color-EF4339">checkout</a>
                    </div>
                </div>
                
                <div className="clear" />
                <form onSubmit={this.onSubmit}>
                    <div className="pay-container-main">
                        <div className="pay-container-column">
                        <div className="pay-container-row-input">
                            <h4>Thông tin mua hàng</h4>
                            <input required onChange={this.onChange} name="email" className="pay-container-input" type="text" placeholder="Email" />
                            <input required onChange={this.onChange} name="name" className="pay-container-input" type="text" placeholder="Họ và tên" />
                            <input required onChange={this.onChange} name="phone" className="pay-container-input" type="text" placeholder="Số điện thoại" />
                            <input required onChange={this.onChange} name="address" className="pay-container-input" type="text" placeholder="Địa chỉ" />
                            <input required onChange={this.onChange} name="tinh" className="pay-container-input" type="text" placeholder="Tỉnh thành" />
                            <input required onChange={this.onChange} name="huyen" className="pay-container-input" type="text" placeholder="Quận huyện" />
                            <input required onChange={this.onChange} name="xa" className="pay-container-input" type="text" placeholder="Phường xã" />
                        </div>
                        </div>
                        <div className="pay-container-column">
                        <div className="pay-container-row-input">
                            <h4>Vận chuyển</h4>
                            <input className="pay-container-input pay-container-input-D1ECF1" type="text" placeholder="Vui lòng nhập thông tin đơn hàng" />
                            <div className="mr-top" />
                            <h4>Thanh toán</h4>
                            <p className="pay-container-input-pay"><ins>Thanh toán khi giao hàng (COD)</ins></p>
                        </div>
                        </div>
                        <div className="pay-container-column">
                        <div className="pay-container-row-input">
                            <h4>Đơn hàng ( <TotalQuantity/> sản phẩm)</h4>
                            <table>
                            <tbody>
                            {this.props.showCartPay}
                            <tr>
                                <td ><input className="pay-container-input-free" type="text" placeholder="Nhập mã giảm giá" /></td>
                                <td ><button className="pay-container-input-free-3 bg-pay-blue" type="submit" value="Áp dụng" >Áp dụng</button> </td>
                            </tr>
                            <tr>
                                <td ><p><ins>Tổng cộng</ins></p></td>
                                <td ><PayTotal/></td>
                            </tr>
                            <tr>
                                <td className="pay-none" />
                                <td className="pay-block"><button className="pay-container-input-free-3 bg-pay"  type="submit" value="Đặt Hàng" children="Đặt Hàng" /></td>
                            </tr>
                            </tbody></table>
                        </div>
                        </div>
                    </div>
                    </form>
                    <div className="clear" />
                <div className="clear"></div>
                
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn chưa thêm sản phẩm vào giỏ hàng.
                        Vui lòng chọn sản phẩm để thanh toán.
                    </DialogContentText>
                    </DialogContent>
                    
                </Dialog>
            </div>
        )
    }
    handleClose=()=>{
        this.setState({
            open:false
        });
    }
}
export default checkout;
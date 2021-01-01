import React, { Component } from 'react'
import * as Format from '../../../conStans/format';
import { Dialog } from '@material-ui/core';
import { DialogTitle ,DialogContentText,DialogContent,DialogActions,Button} from '@material-ui/core';

 class billUserDetailItem extends Component {
    constructor(props) {
         super(props);
         this.state={
             open:false
         }
     }
    handleCloseDelete=()=>{
         this.setState({
             open:false
         });
     }
    handleOnDelete=()=>{
        this.setState({
            open:false
        });
        if(this.props.rulesBill < 2){
            this.props.onDeleteBill(this.props.billId);
        }else{
            alert('Don hang da duoc xac nhan.Vui long lien he nha ban hang.')
        }
    }
    showProductBill=(cart)=>{
        var result=null;
        result=cart.map((item,key)=>{
            
            return (
                <tr key={key}>
                <td>{item.cartProduct.name}</td>
                <td>{Format.format_currency(Format.totalCartPriceItem(item.cartProduct.price
                ,item.cartProduct.priceSale,item.quantity))} vnđ</td>
                <td>{item.quantity} sản phẩm</td>
            </tr>
            )
        })
        return result;
       
        
    }
    onDeleBill=()=>{
        this.setState({
            open:true
        });
    }
    render() {
        var {tinh,huyen,xa,address,cart,userMail,userName,phone,rulesBill}=this.props;
        return (
            <>
             <div className="bill-main-main">
                <table className="bill-main-main-table">
                    <tbody>
                   
                   {this.showProductBill(cart)}
                    </tbody>
                </table>
                </div>
                <hr/>
                <div className="bill-main-footer">
                <div className="bill-main-footer-date">
                    <p>Tên Người Nhận Hàng</p>
                    <p className="bill-address-detail">{userName}</p>
                </div>
                <div className="bill-main-footer-date">
                    <p>Email,Phone</p>
                    <p className="bill-address-detail" >{phone},<br/>{userMail}</p>
                </div>
                <div className="bill-main-footer-address">
                    <p>Địa Chỉ Giao Hàng</p>
                    <p className="bill-address-detail">{address},{xa},{huyen},{tinh}</p>
                </div>
                <div className="bill-main-footer-date">
                    <p>Ngày Giao Hàng</p>
                    <p className="bill-address-detail">{rulesBill?"7 ngay sau khi đặt hàng":"Chưa xác nhận"}</p>
                </div>
                <div className="bill-main-footer-quantity">
                    <p>Số Lượng: {Format.totalCart(cart)} sản phẩm</p>
                    <p className="bill-address-detail">Tiền: {Format.format_currency(Format.totalCartPrice(cart))} vnđ</p>
                </div>
                <div className="bill-main-footer-rules">
                    <p>{rulesBill?"Đã Xác Nhận":"Chờ Xác Nhận"}</p>
                    <Button className="bill-address-detail" onClick={this.onDeleBill}><i className="fas fa-exclamation-circle" />huy don</Button>
                </div>
                </div>   
                <Dialog
                        open={this.state.open}
                        onClose={this.handleCloseDelete}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Hủy Đơn Hàng</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            If you want to remove this bill from the list, the delete selection will not be restored. !!!
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleCloseDelete} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleOnDelete} color="primary" autoFocus>
                            Hủy Đơn Cho tôi
                        </Button>
                        </DialogActions>
                    </Dialog>
            </>
        )
    }
}
export default billUserDetailItem;
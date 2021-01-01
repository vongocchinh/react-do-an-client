import React, { Component } from 'react'
import * as Format from '../../conStans/format';
import StarRatings from 'react-star-ratings';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import InnerImageZoom from 'react-inner-image-zoom';
export default class productDetailTop extends Component {
    constructor(props) {
        super(props);
        this.state={
            quantity:1,
            open:false,
            openCart:false
        }
    }
    onSubmit=(event)=>{
        event.preventDefault();
        var {data}=this.props;
        var {quantity}=this.state;
        if(data.quantity>0&&data.quantity>=parseInt(quantity,10)){
                this.props.addCart(data,parseInt(quantity,10));
                this.setState({
                    openCart:true
                });
        }else{
            this.setState({
                open:true
            });
        }

    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleClose=()=>{
        this.setState({
            open:false,openCart:false
        });
    }
    render() {
        var {data}=this.props;
        // var {arrImages}=this.props;
        if(this.state.open){
            return  <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Sản phẩm tạm thời hết hàng hoặc số lượng ít hơn yêu cầu hàng của bạn, vui lòng chọn mua sản phẩm khác.!!!
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
        }
        if(this.state.openCart){
            return  <Dialog
                        open={this.state.openCart}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >

                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Thêm vào giỏ hàng thành công.Tới <Link to="/cart">giỏ hàng</Link> để xem sản phẩm của bạn.!!!
                            </DialogContentText>
                        </DialogContent>

                    </Dialog>
        }
        return (

            <div className="productDetail-main">
                <div className="product-detail-left">
                <div className="product-detail-images">
                    <div className="product-detail-img-top">
                        <img src={data.images1} alt="###" />
                    </div>
                    <div className="product-detail-img-bottom">
                    <div className="images-small">
                        <img alt="###" src={data.images1} />
                        <img alt="###" src={data.images2} />
                        <img alt="###" src={"https://png.pngtree.com/png-vector/20190916/ourlarge/pngtree-gallery-icon-for-your-project-png-image_1731100.jpg"} />
                        <img alt="###" src={"https://png.pngtree.com/png-vector/20190916/ourlarge/pngtree-gallery-icon-for-your-project-png-image_1731100.jpg"} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="product-detail-right">
                <div className="product-detail-name">
                    <p className="product-detail-name-h1">{data.name}, Chính Hãng ,Bảo Hành 12 Tháng</p>
                    <span className="product-start-detail" >
                    <StarRatings rating={data.star}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="2px"
                            />
                    </span>
                    <p className="total-comment-detail-product">Đánh giá: <span>{this.props.count} đánh giá sản phẩm</span>.</p>
                    <h4 className="product-detail-price">Giá :&nbsp;<span>{Format.format_currency(Format.priceSale(data.price,data.priceSale))} VNĐ</span></h4>
                    <hr></hr>
                    <p className="product-detail-status">
                        <span style={{fontSize:"13px",color:"#292C2E"}}>
                            Tình trạng: &nbsp;
                        </span>
                     <span>{Format.status(data.quantity)}</span>&nbsp; 
                     <span style={{color:"#6666",fontSize:"12px"}}> ({this.props.countView+1} lượt xem)</span>
                     </p>

                    <div className="product-detail-web">
                        <h4>KHUYẾN MÃI ĐẶC BIỆT (Số lượng có hạn)</h4>
                        <p><i className="far fa-heart">&nbsp;</i>"Tưng bừng khai trương" - giảm giá 50% tất cả sản phẩm</p>
                        <p><i className="far fa-heart">&nbsp;</i>Giảm thêm 500.000đ khi thanh toán bằng thẻ tín dụng tại TTMS</p>
                        <p><i className="far fa-heart">&nbsp;</i>Giảm ngay 100.000đ khi quét QR Code cùng Mastercard với đơn hàng 1.000.000đ</p>
                        
                    </div>

                        <form onSubmit={this.onSubmit}>
                             <p className="product-detail-quantity">
                            {/* <span>
                                Số lượng:
                            </span>
                                &nbsp;
                                <select className="select-quantity-product" name="quantity" onChange={this.onChange} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </select>  */}
                            </p>
                            <div className="button-cart-detail">
                                <input className="cart-button-add" type="submit" value="Thêm Vào Giỏ Hàng" />
                                <input className="dol-button-add" type="submit" value="Mua Hàng Ngay" />
                            </div>
                        </form>
                    <br />
                    <hr className="hr-button" />
                    <p className="online-phone"><strong>Gọi đặt mua:</strong> <span className="color-red">19006750</span> (8:00 AM - 22:00 PM)</p>
                    <p className="online-phone"><strong>CHẾ ĐỘ BẢO HÀNH:</strong> 1 đổi 1, 15 ngày, Bảo hành 12 tháng ,Xử lý trong 30 ngày</p>
                    <p className="online-phone"><strong>Hotline toàn quốc : </strong>0855.100.001 </p>
                </div>
                </div>
            </div>

        )
    }
}

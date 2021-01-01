/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Switch } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import PayTotal from "./checkTotal";
import TotalQuantity from "./totalQuantityCart";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { Redirect } from 'react-router-dom';
function FormError(props) {
    if (props.isHidden===false) { return null;}

    return ( <div className="input-error-message">{props.errorMessage}</div>)
}
class checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      phone: "",
      address: "",
      tinh: "",
      huyen: "",
      xa: "",
      cart: [],
      redirectBill: false,
      open: false,
      addressStatus: false,
      openErrForm:false,
      errPhone:{
        phoneError:false,
        isInputValidPhone:false,
        errorMessagePhone:'',
      },
      errEmail:{
        emailError:false,
        isInputValidEmail:false,
        errorMessageEmail:'',
      }
    };
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

  };
   validateInputPhone = (checkingText) => {
    const regexp = /^\d{10,11}$/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
        return { isInputValid: false,
                 errorMessage: '',
                 phoneError:false
                };
    } else {
        return { isInputValid: true,
                 errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.',
                 phoneError:true
                };
    }
}
handleInputValidationPhone = event => {
    const { isInputValid, errorMessage,phoneError } = this.validateInputPhone(this.state.phone);
    this.setState({
        errPhone:{
            isInputValidPhone: isInputValid,
            errorMessagePhone: errorMessage,
            phoneError:phoneError
        }
    })
}
  onSubmit = (event) => {
    event.preventDefault();
    const { email, name, phone, address, tinh, huyen, xa, cart,errEmail,errPhone} = this.state;
    var newBill = {
      email: email,
      name: name,
      phone: phone,
      address: address,
      tinh: tinh,
      huyen: huyen,
      xa: xa,
      cart: cart,
    };
    if (this.state.cart.length > 0 ) {
        if(!errEmail.isInputValidEmail && !errPhone.isInputValidPhone){
            this.props.addBill(newBill);
            this.addAddress();
            this.props.FormatCart();
            this.setState({
              email: "",
              name: "",
              phone: "",
              address: "",
              tinh: "",
              huyen: "",
              xa: "",
              addressStatus: false,
            });
        }else{
            this.setState({
                openErrForm:!this.state.openErrForm
            });
        }
    } else {
      this.setState({
        open: !this.state.open,
      });
    }
    event.target.reset();
  };
  addAddress = () => {
    const {
      email,
      name,
      phone,
      address,
      tinh,
      huyen,
      xa,
      addressStatus,
    } = this.state;
    var userLocalStorage = JSON.parse(localStorage.getItem("user"));
    var addressBill = {
      email: email,
      name: name,
      phone: phone,
      address: address,
      tinh: tinh,
      huyen: huyen,
      xa: xa,
      userId: userLocalStorage.idUser,
      addressStatus: addressStatus,
    };
    this.props.addAddressBill(addressBill);
  };
  componentDidMount() {
    this.setState({
      cart: this.props.cartStore,
    });
    var { AddressBill } = this.props;
    if (AddressBill.dataAddress) {
      this.setState({
        email: AddressBill.dataAddress.email,
        name: AddressBill.dataAddress.name,
        phone: AddressBill.dataAddress.phone,
        address: AddressBill.dataAddress.address,
        tinh: AddressBill.dataAddress.tinh,
        huyen: AddressBill.dataAddress.huyen,
        xa: AddressBill.dataAddress.xa,
        addressStatus: AddressBill.dataAddress.addressStatus,
      });
    } else {
      this.setState({
        email: "",
        name: "",
        phone: "",
        address: "",
        tinh: "",
        huyen: "",
        xa: "",
        addressStatus: false,
      });
    }
  }
  UNSAFE_componentWillMount() {
    var { AddressBill } = this.props;
    if (AddressBill.dataAddress) {
      this.setState({
        email: AddressBill.dataAddress.email,
        name: AddressBill.dataAddress.name,
        phone: AddressBill.dataAddress.phone,
        address: AddressBill.dataAddress.address,
        tinh: AddressBill.dataAddress.tinh,
        huyen: AddressBill.dataAddress.huyen,
        xa: AddressBill.dataAddress.xa,
        addressStatus: AddressBill.dataAddress.addressStatus,
      });
    } else {
      this.setState({
        email: "",
        name: "",
        phone: "",
        address: "",
        tinh: "",
        huyen: "",
        xa: "",
        addressStatus: false,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps&&nextProps.AddressBill){
        if(nextProps.AddressBill.addAddress){
            this.setState({
                email: nextProps.AddressBill.dataAddress.email,
                name: nextProps.AddressBill.dataAddress.name,
                phone: nextProps.AddressBill.dataAddress.phone,
                address: nextProps.AddressBill.dataAddress.address,
                tinh: nextProps.AddressBill.dataAddress.tinh,
                huyen: nextProps.AddressBill.dataAddress.huyen,
                xa: nextProps.AddressBill.dataAddress.xa,
                addressStatus: nextProps.AddressBill.dataAddress.addressStatus,
              });
        }
      }else{
        this.setState({
            email: "",
            name: "",
            phone: "",
            address: "",
            tinh: "",
            huyen: "",
            xa: "",
            addressStatus: false,
          });
      }
  }
  onChangeSW = (e) => {
    this.setState({
      [e.target.name]: e.target.check,
    });
    this.setState({
      addressStatus: !this.state.addressStatus,
    });
  };

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
    const { isInputValid, errorMessage,emailError } = this.validateInputEmail(this.state.email);
    this.setState({
        errEmail:{
            isInputValidEmail: isInputValid,
            errorMessageEmail: errorMessage,
            emailError:emailError
        }
    })
}
  render() {
    var { isCheckOutIn, CheckOutStoreMessage } = this.props;
    var { addressStatus,tinh,huyen,xa,email,name,phone,address ,errPhone, errEmail} = this.state;
    return (
      <div>
        <Dialog open={CheckOutStoreMessage.isCheckOutIn}>
          <DialogContent>
            <CircularProgress aria-labelledby="simple-dialog-title" />
          </DialogContent>
        </Dialog>
        <Dialog
          open={isCheckOutIn}
          onClose={this.handleCloseCircularProgressSuccess}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <CircularProgress color="secondary" />
          </DialogContent>
        </Dialog>
        <div className="container-main">
          <div className="cart-top">
            <a href="###" className="cart-dh-top">
              Trang chủ
            </a>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <a href="###" className="cart-dh-top cart-color-EF4339">
              checkout
            </a>
          </div>
        </div>
        <div className="clear" />
        <form onSubmit={this.onSubmit}>
          <div className="pay-container-main">
            <div className="pay-container-column">
              <div className="pay-container-row-input">
                <h4>Thông tin mua hàng</h4>
                <input
                  required
                  onChange={this.onChange}
                  value={email}
                  name="email"
                  className={errEmail.emailError===true?"input-error" : "pay-container-input"}
                  type="text"
                  placeholder="Email"
                  onBlur={this.handleInputValidationEmail}
                />
                 <FormError 
                    isHidden={errEmail.isInputValidEmail} 
                    errorMessage={errEmail.errorMessageEmail} />
                <input
                  required
                  onChange={this.onChange}
                  value={name}
                  name="name"
                  className="pay-container-input"
                  type="text"
                  placeholder="Họ và tên"
                />
                <input
                  required
                  onChange={this.onChange}
                  value={phone}
                  name="phone"
                  className={errPhone.phoneError===true?"input-error" : "pay-container-input"}
                  type="text"
                  placeholder="Số điện thoại"
                  onBlur={this.handleInputValidationPhone}
                />
                <FormError
                    isHidden={errPhone.isInputValidPhone} 
                    errorMessage={errPhone.errorMessagePhone} />
                <input
                  required
                  onChange={this.onChange}
                  value={address}
                  name="address"
                  className="pay-container-input"
                  type="text"
                  placeholder="Địa chỉ"
                />
                <input
                  required
                  onChange={this.onChange}
                  value={tinh}
                  name="tinh"
                  className="pay-container-input"
                  type="text"
                  placeholder="Tỉnh thành"
                />
                <input
                  required
                  onChange={this.onChange}
                  value={huyen}
                  name="huyen"
                  className="pay-container-input"
                  type="text"
                  placeholder="Quận huyện"
                />
                <input
                  required
                  onChange={this.onChange}
                  value={xa}
                  name="xa"
                  className="pay-container-input"
                  type="text"
                  placeholder="Phường xã"
                />
              </div>
            </div>
            <div className="pay-container-column">
              <div className="pay-container-row-input">
                <h4>Vận chuyển</h4>
                <input
                  className="pay-container-input pay-container-input-D1ECF1"
                  type="text"
                  placeholder="Vui lòng nhập thông tin đơn hàng"
                />
                <div className="mr-top" />
                <h4>Thanh toán</h4>
                <br />
                <p className="pay-container-input-pay">
                  <ins>Thanh toán khi giao hàng (SHIP CODE)</ins>
                </p>
                <br />
                <p className="pay-container-input-pay">
                  <span>
                    <Switch
                      checked={addressStatus}
                      onChange={this.onChangeSW}
                      name="addressStatus"
                    //   onClick={this.addAddress}
                    />
                    Lưu địa chỉ đặt hàng
                  </span>
                </p>
              </div>
            </div>
            <div className="pay-container-column">
              <div className="pay-container-row-input">
                <h4>
                  Đơn hàng ( <TotalQuantity /> sản phẩm)
                </h4>
                <table>
                  <tbody>
                    {this.props.showCartPay}
                    <tr>
                      <td>
                        <input
                          className="pay-container-input-free"
                          type="text"
                          placeholder="Nhập mã giảm giá"
                        />
                      </td>
                      <td>
                        <button
                          className="pay-container-input-free-3 bg-pay-blue"
                          type="submit"
                          value="Áp dụng"
                        >
                          Áp Dụng
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <ins>Tổng cộng</ins>
                        </p>
                      </td>
                      <td>
                        <PayTotal />
                      </td>
                    </tr>
                    <tr>
                      <td className="pay-none" />
                      <td className="pay-block">
                        <button
                          className="pay-container-input-free-3 bg-pay"
                          type="submit"
                          value="Đặt Hàng"
                          children="Đặt Hàng"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              Bạn chưa thêm sản phẩm vào giỏ hàng. Vui lòng chọn sản phẩm để
              thanh toán.
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Dialog
          open={this.state.openErrForm}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Vui lòng kiểm tra địa chỉ email.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  handleClose = () => {
    this.setState({
      openErrForm: false,
    });
  };
}
export default checkout;

import React, { Component } from "react";

// import { Link } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class userEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      userEmail: "",
      phone: "",
      address: "",
      rule: false,
      uidAuthentication: "",
      date: "",
      imagesUser:""
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const {
      displayName,
      userEmail,
      phone,
      rule,
      date,
      uidAuthentication,
      address,
      imagesUser
    } = this.state;
    var userNew = {
      displayName,
      userEmail,
      phone,
      rule,
      uidAuthentication,
      date,
      address,
      imagesUser
    };
    this.props.updateUser(userNew);
    this.Format();
  };
  onSubmitImages=(e)=>{
    e.preventDefault();
    const {
      displayName,
      userEmail,
      phone,
      rule,
      date,
      uidAuthentication,
      address,
      imagesUser
    } = this.state;
    var userNew = {
      displayName,
      userEmail,
      phone,
      rule,
      uidAuthentication,
      date,
      address,
      imagesUser
    };
    this.props.updateImagesUser(userNew);
    this.Format();
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onChangeImages=(e)=>{
    if(e.target.files[0]){
        const imagesUser=e.target.files[0];
        this.setState({
            imagesUser:imagesUser,
        });
    }
  }
  UNSAFE_componentWillMount() {
    var { User } = this.props;
    if (User) {
      this.setState({
        displayName: User.displayName,
        userEmail: User.userEmail,
        phone: User.phone,
        rule: User.rule,
        date: User.date,
        uidAuthentication: User.uidAuthentication,
        address: User.address,
        imagesUser:User.imagesUser
      });
    } else {
      this.Format();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.User) {
      this.setState({
        displayName: nextProps.User.displayName,
        userEmail: nextProps.User.userEmail,
        phone: nextProps.User.phone,
        date: nextProps.User.date,
        uidAuthentication: nextProps.User.uidAuthentication,
        rule: nextProps.User.rule,
        address: nextProps.User.address,
        imagesUser:nextProps.User.imagesUser
      });
    } else {
      this.Format();
    }
  }
  Format = () => {
    this.setState({
      displayName: "",
      userEmail: "",
      phone: "",
      address: "",
      rule: false,
      uidAuthentication: "",
      date: "",
      imagesUser:""
    });
  };
  render() {
    var { displayName, userEmail, phone, address,imagesUser } = this.state;

    return (
      <div>
        <Dialog
          open={this.props.LoginRequest.isUpdateIn}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <CircularProgress color="secondary" />
          </DialogContent>
        </Dialog>
        <form onSubmit={this.onSubmitImages}>
          <div className="user-container-layout">
            <div className="user-container">
            <div className="user-container-main">
                <div className="edit-user-container-main-detail">
                  <p className="user-container-title">Thông tin  |</p>
                    <div className="images-user-layout-update">
                        <img alt="###"
                            className="images-user"
                            src={imagesUser?
                                imagesUser:"https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"} 
                        />
                    </div>
                  <br />
                  <input style={{marginTop:"5px",marginBottom:"5px"}} type="file" name="imagesUser" onChange={this.onChangeImages} />
                  <input
                    className="edit-user-container-name edit-user-container-name-submit"
                    value="Update ảnh"
                    type="submit"
                  />
                </div>
              </div>
              </div>
            <br />
          </div>
        </form>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="user-container-layout">
            <div className="user-container">
              <div className="user-container-main">
                <div className="edit-user-container-main-detail">
                  <p className="user-container-title">
                    Thông tin cá nhân |{" "}
                  </p>
                  <p className="user-container-detail-user-default">Tên:</p>
                  <input
                    onChange={this.onChange}
                    name="displayName"
                    className="edit-user-container-name"
                    value={displayName || ""}
                    type="text"
                  />
                  <p className="user-container-detail-user-default">Email:</p>
                  <div
                    onChange={this.onChange}
                    name="userEmail"
                    className="edit-user-container-name"
                    value={userEmail || ""}
                    type="text"
                  >
                    {userEmail}
                  </div>
                </div>
              </div>
              <div className="user-container-main">
                <div className="edit-user-container-main-detail">
                  <p className="user-container-title">
                    Sổ địa chỉ 
                  </p>
                  <p className="user-container-detail-user-default">Địa Chỉ:</p>
                  <input
                    onChange={this.onChange}
                    name="address"
                    className="edit-user-container-name"
                    value={address || ""}
                    type="text"
                  />
                  <p className="user-container-detail-user-default">
                    Số điện thoại:
                  </p>
                  <input
                    onChange={this.onChange}
                    name="phone"
                    className="edit-user-container-name"
                    value={phone || ""}
                    type="text"
                  />
                </div>
              </div>
              <div className="user-container-main">
                <div className="edit-user-container-main-detail">
                  <p className="user-container-title">Thông tin phone |</p>
                  <p className="user-container-detail-user-default">
                    Số điện thoại:
                  </p>
                  <input
                    className="edit-user-container-name"
                    defaultValue={phone || ""}
                    type="text"
                  />
                  <p className="user-container-detail-user-default">Mã Thuế:</p>
                  <input className="edit-user-container-name" type="text" />
                  <br />
                  <input
                    className="edit-user-container-name edit-user-container-name-submit"
                    value="Lưu Chỉnh Sửa"
                    type="submit"
                  ></input>
                </div>
              </div>
            </div>
            <br />
          </div>
        </form>
        <div className="clear"></div>
        <br />
      </div>
    );
  }
}

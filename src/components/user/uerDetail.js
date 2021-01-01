import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class uerDetail extends Component {
    render() {
        var user=this.props.User;
        return (
            <div>
            <br/>
            <div className="user-container-layout">
                <div className="user-container">
                    <div className="user-container-main">
                        <div className="user-container-main-detail">
                            <p className="user-container-title">Thông tin cá nhân | <Link to="/user-edit" href="edit.html">Chỉnh sửa</Link></p>
                            <div className="images-user-layout">
                                <img alt="###" src={user.imagesUser?user.imagesUser:"https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"} 
                                    className="images-user"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="user-container-main">
                        <div className="user-container-main-detail">
                            <p className="user-container-title">Thông tin cá nhân | <Link to="/user-edit" href="edit.html">Chỉnh sửa</Link></p>
                            <p className="user-container-detail-user"><strong>Name: </strong>{user.displayName}</p>
                            <p className="user-container-detail-user"><strong>Email: </strong>{user.userEmail}</p>
                            <p className="user-container-detail-user"><ins><a href="###">Nhận ưu đãi qua mail</a></ins></p>
                        </div>
                    </div>
                    <div className="user-container-main">
                        <div className="user-container-main-detail">
                            <p className="user-container-title">Sổ địa chỉ | <Link to="/user-edit" >Chỉnh sửa</Link></p>
                            <p className="user-container-detail-user-default">Địa chỉ nhận hàng mặc định</p>
                            <p className="user-container-detail-user"><strong>Name: </strong><strong>{user.displayName}</strong></p>
                            <p className="user-container-detail-user"><strong>Email: </strong>{user.userEmail}</p>
                            <p className="user-container-detail-user"><strong>Địa chỉ: </strong>{user.address}</p>
                            <p className="user-container-detail-user"><strong>Số điện thoại: </strong>{user.phone}</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="main-content-table">
                <p className="table-text"><i className="far fa-calendar-alt" /> Đơn Hàng Của Bạn</p>
                <br/>
                <div className="hidden-table">
                <TableContainer component={Paper}>
                    <Table  size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Tên Người Đặt</TableCell>
                            <TableCell align="right">Số Lượng</TableCell>
                            <TableCell align="right">Ngày Đặt Hàng</TableCell>
                            <TableCell align="right">Ngày Giao Hàng</TableCell>
                            <TableCell align="right">Tình Trạng</TableCell>
                            <TableCell align="right">Chi Tiết</TableCell>
                        </TableRow>
                        </TableHead>
                        {this.props.showBill}
                    </Table>
                    </TableContainer>
                    
                </div>
                </div>
            </div>
            <div className="clear"></div>
            <br/>
            
            </div>
        )
    }
}

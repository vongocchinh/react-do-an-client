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
                        <p className="user-container-detail-user">{user.displayName}</p>
                        <p className="user-container-detail-user">{user.email}</p>
                        <p className="user-container-detail-user"><ins><a href="###">Nhận ưu đãi qua mail</a></ins></p>
                        </div>
                    </div>
                <div className="user-container-main">
                    <div className="user-container-main-detail">
                        <p className="user-container-title">Sổ địa chỉ | <Link to="/user-edit" >Chỉnh sửa</Link></p>
                        <p className="user-container-detail-user-default">Địa chỉ nhận hàng mặc định</p>
                        <p className="user-container-detail-user"><strong>{user.displayName}</strong></p>
                        <p className="user-container-detail-user">{user.email}</p>
                        <p className="user-container-detail-user">{user.na}</p>
                        <p className="user-container-detail-user">{user.phoneNumber}</p>
                    </div>
                </div>
                <div className="user-container-main">
                    <div className="user-container-main-detail">
                        <p className="user-container-title hidden">&nbsp;</p>
                        <p className="user-container-detail-user-default">Địa chỉ thanh toán mặc định</p>
                        <p className="user-container-detail-user"><strong>{user.displayName}</strong></p>
                        <p className="user-container-detail-user">{user.email}</p>
                        <p className="user-container-detail-user">{user.na}</p>
                        <p className="user-container-detail-user">{user.phoneNumber}</p>
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
                            <TableCell align="right">Tên sản phẩm</TableCell>
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

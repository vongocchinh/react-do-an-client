import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
export default class userDetailItem extends Component {
    count=(cart)=>{
        var count=0;
        if(cart){
            for(let i=0;i<cart.length;i++){
                count+=cart[i].quantity;
            }
        }
        return count;
    }
    render() {
        var {row,stt}=this.props;
        return (
            <TableBody>
                <TableRow >
                    <TableCell component="th" scope="row">{stt}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{this.count(row.cart)}</TableCell>
                    <TableCell align="right">{new Date(row.date.seconds*1000).toDateString()}</TableCell>
                    <TableCell align="right">{"Nhận hàng sau 7 ngày đặt"}</TableCell>
                    <TableCell align="right"> {row.rulesBill?"Đã xác Nhận(Đang chờ giao hàng)":"Chưa xác nhận"}</TableCell>
                    <TableCell align="right">
                        <Link to={"/bill-detail/"+row.name+"/"+row.id+".html"}>{"Chi Tiết"}</Link>
                    </TableCell>
                </TableRow>
            </TableBody>
        )
    }
}

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
                    <TableCell align="right">{this.showRulesBill(row.rulesBill)}</TableCell>
                    <TableCell align="right"> {this.showRulesBillStatus(row.rulesBill)}</TableCell>
                    <TableCell align="right">
                        <Link to={"/bill-detail/"+row.name+"/"+row.id+".html"}>{"Chi Tiết"}</Link>
                    </TableCell>
                </TableRow>
            </TableBody>
        )
    }
    showRulesBill=(item)=>{
        var result="";
        switch (item){
            case 1:
            result="Chưa xác nhận.";
            break;
            case 2:
            result="Nhận đơn hàng sau 7 ngày.";
            break;
            case 3:
            result="Nhận đơn hàng sau 7 ngày.";
            break;
            case 4:
            result="(Đơn hàng mất sau 7 ngày).";
            break;
            default : return result;
        }
        return result;
    }
    showRulesBillStatus=(item)=>{
        var result="";
        switch (item){
            case 1:
            result="Chưa xác nhận.";
            break;
            case 2:
            result="Đã xác nhận (Đang chờ giao hàng).";
            break;
            case 3:
            result="Đang vận chuyển hàng.";
            break;
            case 4:
            result="Đã giao hàng.";
            break;
            default : return result;
        }
        return result;
    }
}

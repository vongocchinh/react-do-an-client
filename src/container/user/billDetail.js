/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import BillUserDetail from './../../components/user/userItem/billUserDetail';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux'
import { connect } from 'react-redux';
import BillUserDetailItems from '../../components/user/userItem/billUserDetailItem';
import { Redirect } from 'react-router-dom';
import * as action from '../../actions/bill';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BillStepper from './../../components/user/userItem/billStepper';

 class billDetail extends Component {
    render() {
        var {BillStore,BillMessage,User}=this.props;
        var {id}=this.props.match.params;
        if(User.email===undefined||User.email===''){
            return <Redirect to="/loginPage" />
        }
        if(BillMessage.billDeleteRequest){
            return (
                <Dialog open={true}>
                    <DialogContent>
                        <CircularProgress aria-labelledby="simple-dialog-title" />
                    </DialogContent>
                </Dialog>
            );
        }
        if(BillMessage.billDeleteSuccess){
            toast.warning('Huy Don Thanh Cong');
            return <Redirect to='/user' />
        }
        setInterval(() => {
            this.props.ResetMessageBill();
        }, 1000);
        return (
           <BillUserDetail
          
               showBillUserDetail={this.showBill(BillStore,id)}
               showStepper={this.showStepper(BillStore,id)}
           />
        )
    }
    showBill=(bills,id)=>{
        var result=null;
        if(bills){
            result=bills.map((bill,key)=>{
                if(bill.id===id){
                  
                    var tinh=bill.tinh;
                    var huyen=bill.huyen;
                    var xa=bill.xa;
                    var address=bill.address;
                    var userName=bill.userName;
                    var userMail=bill.userMail;
                    var phone=bill.phone;
                    var rulesBill=bill.rulesBill;
                    var billId=bill.id;
                    return <BillUserDetailItems 
                            tinh={tinh}
                            huyen={huyen}
                            xa={xa}
                            address={address}
                            userName={userName}
                            userMail={userMail}
                            phone={phone}
                            cart={bill.cart}
                            key={key}
                            rulesBill={rulesBill}
                            billId={billId}
                            onDeleteBill={this.onDeleteBill}
                           
                        />
                    
                }
            })
        }
        return result;
    }
    showStepper=(bills,id)=>{
        var result=null;
        result=bills.map((bill,key)=>{
            if(bill.id===id){
                return <BillStepper
                    rulesBill={bill.rulesBill}
                    key={key}
                 />
            }
        });
        return result;
    }
    onDeleteBill=(id)=>{
       
        this.props.onDeleteBill(id);
    }
}
const mapStateToProps=(state)=>{
    return{
        BillStore:state.getFirestore.ordered.bill,
        LoginRequest:state.LoginRequest,
        BillMessage:state.Bill,
        User:state.User
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        onDeleteBill:(id)=>{
            dispatch(action.BILL_DELETE(id));
        },
        ResetMessageBill:()=>{
            dispatch(action.ResetMessageBill());
        }
    }
}

export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"bill"
    }
]))
(billDetail);
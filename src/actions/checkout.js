import * as checkoutType from '../conStans/checkout';
import {db} from '../config/fbConfig';
// import emailjs from 'emailjs-com';
// import nodemailer from 'nodemailer';
// var express = require('express');
// var router = express.Router();
export const Bill_FETCH=(bill={})=>{
    return(dispatch,getState,{getFirebase})=>{
        dispatch(CHECKOUT_REQUEST());
        var firebase=getFirebase().firestore();
        const {
            email='',
            name='',
            phone='',
            address='',
            tinh='',
            huyen='',
            xa='',
            cart='',
            userName='',
            userMail='',
            date=new Date(),

        }=bill;
        var user=JSON.parse(localStorage.getItem('user'));
        var uid=user.idUser;
        var rulesBill=1;
        firebase.collection('bill').add({
            email,name,phone,address,tinh,huyen,xa,cart,userName,userMail,rulesBill,date,uid
        }).then((res)=>{
            dispatch(CHECKOUT_SUCCESS());
        }).catch(()=>{
            dispatch(CHECKOUT_FAIL());
        });
    }
}
export const CHECKOUT_REQUEST=()=>{
    return{
        type:checkoutType.CHECKOUT_REQUEST    }
}

export const CHECKOUT_SUCCESS=()=>{
    return{
        type:checkoutType.CHECKOUT_SUCCESS    }
}

export const CHECKOUT_FAIL=()=>{
    return{
        type:checkoutType.CHECKOUT_FAIL       }
}

export const resetMessageBill=()=>{
    return {
        type:checkoutType.CHECKOUT_Reset
    }
}


export const addAddressBill=(data)=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        const {
            email='',
            name='',
            phone='',
            address='',
            tinh='',
            huyen='',
            xa='',
            userId,
            addressStatus
        }=data;
        if(addressStatus){
            firebase.collection('addressBill').doc(userId).set({
                email,name,phone,address,tinh,huyen,xa,userId,addressStatus:addressStatus
            }).then((res)=>{
                // dispatch(CHECKOUT_SUCCESS());
            }).catch(()=>{
                // dispatch(CHECKOUT_FAIL());
            });
        }else{
            firebase.collection('addressBill').doc(userId).set({
                email:"",name:"",phone:"",address:"",tinh:"",huyen:"",xa:"",userId,addressStatus:addressStatus
            }).then((res)=>{
                // dispatch(CHECKOUT_SUCCESS());
            }).catch(()=>{
                // dispatch(CHECKOUT_FAIL());
            });
        }
    }
}

export const getAddressBill=(id)=>{
    return (dispatch,getState,{getFirebase})=>{
        // var templateParams = {
        //     to_name: 'Ngoc chinh',
        //     from_name:'cua hang',
        //     message:"hi"
        // };
        // emailjs.send('service_m5rlhgo','template_jt1vd7f', templateParams, 'user_Y6lRGlGF28jdzEvr641G8')
        //     .then((response) => {
        //     console.log('SUCCESS!', response.status, response.text);
        //     }, (err) => {
        //     console.log('FAILED...', err);
        //     });
        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //       user: 'ngocchinh1410@gmail.com',
        //       pass: 'chinhchinh1410'
        //     }
        //   });
        //   var mailOptions = {
        //     from: 'test@gmail.com',
        //     to: 'ngocchinh1410@yahoo.com',
        //     subject: 'Sending Email using Node.js',
        //     text: 'That was easy!'
        //   };
        //   transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       console.log('Email sent: ' + info.response);
        //     }
        //   });
        var data={};
        db.collection('addressBill').where('userId','==',id).get().then(res=>{
            res.forEach(doc=>{
               var dataAddress=doc.data();
               var id=doc.id;
                data={
                   id,dataAddress
               }
            })
            dispatch(GET_ADDRESS_BILL(data));
        }).catch(err=>{

        });
    }
}

export const GET_ADDRESS_BILL=(data)=>{
    return {
        type:checkoutType.GetAddressBill,
        data
    }
}
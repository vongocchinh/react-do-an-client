import * as checkoutType from '../conStans/checkout';

//bill
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
            uid=''
        }=bill;
        var rulesBill=false;
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

import * as types from '../conStans/bill';

export const BILL_DELETE=(id)=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        dispatch(Delete_bill_request());
        firebase.collection("bill").doc(id).delete().then(()=>{
            dispatch(Delete_bill_success());
        }).catch(()=>{
            dispatch(Delete_bill_error());
        })
    }
}
export const Delete_bill_request=()=>{
    return {
        type:types.BILL_DELETE_REQUEST
    }
}
export const Delete_bill_success=()=>{
    return {
        type:types.BILL_DELETE_SUCCESS
    }
}
export const Delete_bill_error=()=>{
    return {
        type:types.BILL_DELETE_ERROR
    }
}
export const ResetMessageBill=()=>{
    return {
        type:types.BILL_DELETE_Reset
    }
}
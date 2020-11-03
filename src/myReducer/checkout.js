import * as checkoutTypes from './../conStans/checkout';


var initialState={
    isCheckOutIn:false,
    isCheckOutSuccess:false,
    isCheckOutFail:false,
    
};

 var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case checkoutTypes.CHECKOUT_REQUEST:
            state={
                isCheckOutIn:true,
                isCheckOutSuccess:false,
                isCheckOutFail:false,
            }
        return state;
        case checkoutTypes.CHECKOUT_SUCCESS:
            state={
                isCheckOutIn:false,
                isCheckOutSuccess:true,
                isCheckOutFail:false,
            }
        return state;
        case checkoutTypes.CHECKOUT_FAIL:
            state={
                isCheckOutIn:false,
                isCheckOutSuccess:false,
                isCheckOutFail:true,
            }
        return state;
        case checkoutTypes.CHECKOUT_Reset:
            state={
                isCheckOutIn:false,
                isCheckOutSuccess:false,
                isCheckOutFail:false,
            }
        return state;
        default: return state;
    }
    
}
export default myReducer;
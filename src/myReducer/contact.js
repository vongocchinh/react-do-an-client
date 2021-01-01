import * as types from '../conStans/contact';

var initialState={
    CONTACT_IN:false,
    CONTACT_SUCCESS:false,
    CONTACT_ERO:false
}
var myReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.IN_CONTACT:
           
            state={
                CONTACT_IN:true,
                CONTACT_SUCCESS:false,
                CONTACT_ERO:false
            }
            return state;
        case types.SUCCESS_CONTACT:
          
        state={
            CONTACT_IN:false,
            CONTACT_SUCCESS:true,
            CONTACT_ERO:false
        }
        return state;
        case types.ERO_CONTACT:
           
        state={
            CONTACT_IN:false,
            CONTACT_SUCCESS:false,
            CONTACT_ERO:true
        }
        return state;
    case types.ResetMessageContact:
        state={
            CONTACT_IN:false,
            CONTACT_SUCCESS:false,
            CONTACT_ERO:false
        }
        return state;
        default:
            return state;
    }
}
export default myReducer;
import * as types from './../conStans/user';
var initialState={
    isResetPasswordRequest:false,
    isResetPasswordSuccess:false,
    isResetPasswordError:false
}
var myReducer=(state=initialState,actions)=>{
    switch (actions.type){
        case types.Reset_Password_Success:
            state={
                isResetPasswordRequest:false,
                isResetPasswordSuccess:true,
                isResetPasswordError:false
            }
            return state;
        case types.Reset_Password_In:
            state={
                isResetPasswordRequest:true,
                isResetPasswordSuccess:false,
                isResetPasswordError:false
            }
            return state;
        case types.Reset_Password_Error:
            state={
                isResetPasswordRequest:false,
                isResetPasswordSuccess:false,
                isResetPasswordError:true
            }
            return state;
            case types.Reset_Message_Password:
                state={
                    isResetPasswordRequest:false,
                    isResetPasswordSuccess:false,
                    isResetPasswordError:false
                }
                return state;
        default:return state;
    }
}
export default myReducer;
import * as typeRegister from './../conStans/user';
var initialState={
    isRegisterRequest:false,
    isRegisterSuccess:false,
    isRegisterError:false
}
var myReducer=(state=initialState,actions)=>{
    switch (actions.type){
        case typeRegister.REGISTER_REQUEST:
            state={
                isRegisterRequest:true,
                isRegisterSuccess:false,
                isRegisterError:false
            }
            return state;
        case typeRegister.REGISTER_SUCCESS:
            state={
                isRegisterRequest:false,
                isRegisterSuccess:true,
                isRegisterError:false
            }
            return state;
        case typeRegister.REGISTER_FAILURE:
            state={
                isRegisterRequest:false,
                isRegisterSuccess:false,
                isRegisterError:true
            }
            return state;
            case typeRegister.Reset:
                state={
                    isRegisterRequest:false,
                    isRegisterSuccess:false,
                    isRegisterError:false
                }
                return state;
        default:return state;
    }
}
export default myReducer;
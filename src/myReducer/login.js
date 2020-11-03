import * as typeLogin from '../conStans/user';

var initialState={
    isLoggingIn: false,
    isLoggingSuccess: false,
    loginError: false,
    isLoggingOut: false,
    isVerifying: false,
    logoutError: false,
    isAuthenticated: false,
    isUpdateIn:false,
    isUpdateSuccess:false,
    isUpdateError:false,
    
}
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case typeLogin.LOGIN_REQUEST:
            
            state={
                isLoggingIn: true,
                isLoggingSuccess: false,
                loginError: false,
                isLoggingOut: false,
                isVerifying: false,
                logoutError: false,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:false,
                isUpdateError:false,
               
            }
            return state;
            
        case typeLogin.LOGIN_SUCCESS:
            state={
                isLoggingIn: false,
                isLoggingSuccess: true,
                loginError: false,
                isLoggingOut: false,
                isVerifying: false,
                logoutError: false,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:false,
                isUpdateError:false,
               
            }
            return state;
        case typeLogin.LOGIN_FAILURE:
            
            state={
                isLoggingIn: false,
                isLoggingSuccess: false,
                loginError: true,
                isLoggingOut: false,
                isVerifying: false,
                logoutError: false,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:false,
                isUpdateError:false,
               
            }
           
            return state;

        // 
        case typeLogin.LOGOUT_REQUEST:
            
            state={
                isLoggingIn: false,
                isLoggingSuccess: false,
                loginError: false,
                isLoggingOut: true,
                isVerifying: false,
                logoutError: false,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:false,
                isUpdateError:false,
               
            }
            
            return state;
        case typeLogin.LOGOUT_SUCCESS:
            
            state={
                isLoggingIn: false,
                isLoggingSuccess: false,
                loginError: false,
                isLoggingOut: false,
                isVerifying: true,
                logoutError: false,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:false,
                isUpdateError:false,
               
            }
            return state;
        case typeLogin.LOGOUT_FAILURE:
            
            state={
                isLoggingIn: false,
                isLoggingSuccess: false,
                loginError: false,
                isLoggingOut: false,
                isVerifying: false,
                logoutError: true,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:false,
                isUpdateError:false,
               
            }
            return state;
        case typeLogin.UPDATE_FAILURE:
        
            state={
                isLoggingIn: false,
                isLoggingSuccess: true,
                loginError: false,
                isLoggingOut: false,
                isVerifying: false,
                logoutError: false,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:false,
                isUpdateError:true,
               
            }
                return state;
        case typeLogin.UPDATE_REQUEST:
            
                state={
                    isLoggingIn: false,
                    isLoggingSuccess: true,
                    loginError: false,
                    isLoggingOut: false,
                    isVerifying: false,
                    logoutError: false,
                    isAuthenticated: false,
                    isUpdateIn:true,
                    isUpdateSuccess:false,
                    isUpdateError:false,
                   
                }
                return state;
        case typeLogin.UPDATE_SUCCESS:
            state={
                isLoggingIn: false,
                isLoggingSuccess: true,
                loginError: false,
                isLoggingOut: false,
                isVerifying: false,
                logoutError: false,
                isAuthenticated: false,
                isUpdateIn:false,
                isUpdateSuccess:true,
                isUpdateError:false,
            }
            return state;
            case typeLogin.Reset:
                state={
                    isLoggingIn: false,
                    isLoggingSuccess: false,
                    loginError: false,
                    isLoggingOut: false,
                    isVerifying: false,
                    logoutError: false,
                    isAuthenticated: false,
                    isUpdateIn:false,
                    isUpdateSuccess:false,
                    isUpdateError:false,
                   
                }
                return state;
        default :return state;
    }
}
export default myReducer;
import * as UserType from './../conStans/user';
import firebase from './../config/fbConfig';

export const LOGIN_REQUEST=()=>{
   
    return{
        type:UserType.LOGIN_REQUEST
    }
}
export const LOGIN_SUCCESS=()=>{
    return{
        type:UserType.LOGIN_SUCCESS,
        
    }
}
export const LOGIN_FAILURE=()=>{
    return{
        type:UserType.LOGIN_FAILURE
    }
}

export const loginUser_request=(users)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(LOGIN_REQUEST());
        firebase.auth().signInWithEmailAndPassword(users.userEmail,users.passWord).then(res=>{
            var user=firebase.auth().currentUser;
             if(user){
                 var userArray={
                     displayName:user.displayName,
                     email:user.email,
                     photoURL:user.photoURL,
                     uid:user.uid,
                     emailVerified:user.emailVerified,
                     phoneNumber:user.phoneNumber,
                     na:user.na
                 }
                 localStorage.setItem('user',JSON.stringify(userArray));
             }
             dispatch(LOGIN_SUCCESS());
             dispatch(USER_GET());
         }).catch(error=>{
             dispatch(LOGIN_FAILURE())
         });
    }
}

export const USER_GET=()=>{
    return {
        type:UserType.USER_GET
    }
}

// login


export const LOGOUT_REQUEST=()=>{
   
    return{
        type:UserType.LOGOUT_REQUEST
    }
}
export const LOGOUT_SUCCESS=()=>{
    return{
        type:UserType.LOGOUT_SUCCESS
    }
}
export const LOGOUT_ERROR=()=>{
    return{
        type:UserType.LOGOUT_FAILURE
    }
}


export const LOGOUT_USER_REQUEST=()=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(LOGOUT_REQUEST())
        setTimeout(() => {
            firebase.auth().signOut().then(()=>{
                var user=firebase.auth.currentUser;
                localStorage.removeItem('user');
                if(!user){
                    dispatch(LOGOUT_SUCCESS());
                }
               localStorage.removeItem('user');
               dispatch(USER_GET());
            }).catch(()=>{
                dispatch(LOGOUT_ERROR());
            });
        }, 3000);

        
        
    }
}





export const REGISTER_REQUEST=()=>{
    return {
        type:UserType.REGISTER_REQUEST
    }
}
export const REGISTER_SUCCESS=()=>{
    return {
        type:UserType.REGISTER_SUCCESS
    }
}
export const REGISTER_ERROR=()=>{
    return {
        type:UserType.REGISTER_FAILURE
    }
}
export const registerUserRequest=(userAdd={})=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(REGISTER_REQUEST());
        const{
            userEmail='',
            passWord='',
        }=userAdd;
        firebase.auth().createUserWithEmailAndPassword(userEmail,passWord).then((res)=>{
            var user = firebase.auth().currentUser;
            user.sendEmailVerification().then((res)=> {
               
            }).catch((error)=> {
               
            });
            dispatch(REGISTER_SUCCESS());
        }).catch(error=>{
            dispatch(REGISTER_ERROR());
        });

        
    }
}

//reset pass
export const ResetPass_request=(email)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(reset_password_In());
        var emailAddress = email;
        firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
        dispatch(reset_password_success());
        }).catch(function(error) {
        dispatch(reset_password_Error());
        });
    }
}
export const reset_password_success=()=>{
    return {
        type:UserType.Reset_Password_Success
    }
}
export const reset_password_In=()=>{
    return {
        type:UserType.Reset_Password_In
    }
}
export const reset_password_Error=()=>{
    return {
        type:UserType.Reset_Password_Error
    }
}
export const ResetMessagePassword=()=>{
    return {
        type:UserType.Reset_Message_Password
    }
}





//updateUser
export const UPDATE_REQUEST=()=>{
    return {
        type:UserType.UPDATE_REQUEST
    }
}
export const UPDATE_SUCCESS=()=>{
    return {
        type:UserType.UPDATE_SUCCESS,
        
    }
}
export const UPDATE_ERROR=()=>{
    return {
        type:UserType.UPDATE_FAILURE
    }
}

export const updateUser_request=(users)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(UPDATE_REQUEST());
        var user = firebase.auth().currentUser;
        setTimeout(() => {
            user.updateProfile({
                    displayName:users.displayName,
                    email:users.email,
                    photoURL:"users.photoURL",
                    uid:users.uid,
                    emailVerified:users.emailVerified,
                    phoneNumber:parseInt(users.phoneNumber,10),
                    na:"users.na",
                    eb:users.na
                }).then(function() {
                    var user=firebase.auth().currentUser;
                    if(user){
                     
                        var userArray={
                            displayName:user.displayName,
                            email:user.email,
                            photoURL:user.photoURL,
                            uid:user.uid,
                            emailVerified:user.emailVerified,
                            phoneNumber:parseInt(user.phoneNumber,10),
                            na:user.na
                        }
                       localStorage.setItem('user',JSON.stringify(userArray));
                    }
                    dispatch(USER_GET());
                    dispatch(UPDATE_SUCCESS());
                }).catch(function(error) {
                    dispatch(UPDATE_ERROR());
                });
        }, 5000);
      
    }
}




//getUser
export const getUser_request=(user)=>{
    return (dispatch,getState,{getFirebase})=>{
        
        // var user=firebase.auth().currentUser;
        
    }
}
export const getUser=(user)=>{
    return{
        type:UserType.USER_GET,
        user
    }
}
export const resetRegister=()=>{
    return {
        type:UserType.Reset
    }
}
// reset
export const reset_message_login=()=>{
    return {
        type:UserType.Reset
    }
}















export const getUserOnLine=()=>{
    return (dispatch,getState,{getFirebase})=>{
        var user = firebase.auth().currentUser;
        if (user) {
            dispatch(userOnline(user));
        } else {
            dispatch(userOffline());
        }
    }
}
export const userOnline=(user)=>{

    return {
        type:UserType.CheckOnline,
        user
    }
}
export const userOffline=()=>{

    return {
        type:UserType.CheckOffline
    }
}
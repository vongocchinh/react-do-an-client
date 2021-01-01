import * as UserType from './../conStans/user';
import firebase from './../config/fbConfig';
import {db,storage} from './../config/fbConfig';
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
            // var firebases=getFirebase().firestore();
            if (user) {
                db.collection("userClient").where('uidAuthentication','==',user.uid).get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach(function(doc) {
                        var userArray={
                                    idUser:doc.id
                                }
                                localStorage.setItem('user',JSON.stringify(userArray));
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
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
        dispatch(LOGOUT_REQUEST());
        console.log("day");
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
             var uidAuthentication=res.user.uid;
                var firebases=getFirebase().firestore();
                dispatch(REGISTER_REQUEST());
                firebases.collection("userClient").add({
                    userEmail:userEmail,
                    date:new Date(),
                    uidAuthentication:uidAuthentication,
                    displayName:"",
                    address:"",
                    rule:false,
                    phone:"",
                    imagesUser:""
                }).then(()=>{
                    dispatch(REGISTER_SUCCESS());
                }).catch(()=>{
                    dispatch(REGISTER_ERROR());
                });
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
        var idLocalStorage=JSON.parse(localStorage.getItem('user'));
        var id=idLocalStorage.idUser;
        var {userEmail,displayName,date,rule,uidAuthentication,address,phone,imagesUser}=users;

        db.collection('userClient').doc(id).set({
            userEmail,displayName,date,rule,uidAuthentication,address,phone,imagesUser
        }).then(function() {
            var user=firebase.auth().currentUser;
            if(user){
                var userArray={
                    idUser:id,
                }
               localStorage.setItem('user',JSON.stringify(userArray));
            }
            dispatch(USER_GET());
            dispatch(UPDATE_SUCCESS());
        }).catch(function(error) {
            dispatch(UPDATE_ERROR());
        });

    }
}


export const updateImagesUser_request=(users)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(UPDATE_REQUEST());
        var idLocalStorage=JSON.parse(localStorage.getItem('user'));
        var id=idLocalStorage.idUser;
        var {userEmail,displayName,date,rule,uidAuthentication,address,phone,imagesUser}=users;


        var storages=storage.ref("images/"+(imagesUser.name)).put(imagesUser);
        storages.on('state_changed',
        snapshot=>{},
        error=>{
            console.log(error);
        },
        ()=>{
            storage.ref("images").child(imagesUser.name).getDownloadURL().then((url)=>{

                db.collection('userClient').doc(id).set({
                    userEmail,displayName,date,rule,uidAuthentication,address,phone,imagesUser:url
                }).then(function() {
                    var user=firebase.auth().currentUser;
                    if(user){
                        var userArray={
                            idUser:id,
                        }
                       localStorage.setItem('user',JSON.stringify(userArray));
                    }
                    dispatch(USER_GET());
                    dispatch(UPDATE_SUCCESS());
                }).catch(function(error) {
                    dispatch(UPDATE_ERROR());
                });

            });
        });


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
// get user
export const Get_User=()=>{
    return (dispatch,getState,{getFirebase})=>{
        var userLocalStorage=JSON.parse(localStorage.getItem('user'));
        if(userLocalStorage){
            var id=userLocalStorage.idUser;
        if(id){
            db.collection("userClient").doc(id).get().then(
                (res)=>{
                    dispatch(Get_User_Account(res.data()));
                }
            ).catch(
                (res)=>{
                    console.log(res);
                }
            )
        }
        }
    }
}
export const Get_User_Account=(user)=>{
    return {
        type:UserType.GET_USER_ACCOUNT,
        user
    }
}




export const UPDATE_PASSWORD=()=>{
    return (dispatch,getState,{getFirebase})=>{
        var user=firebase.auth().currentUser;
        if(user){
            user.updatePassword('chinhvo123').then(res=>{

            }).catch(err=>{

            });
        }

    }
}
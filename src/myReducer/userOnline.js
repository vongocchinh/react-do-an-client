import * as UserType from './../conStans/user';

// var UserData=JSON.parse(localStorage.getItem('User'));
var initialState={
    userOnline:false,
    userOffline:false,
    user:{

    }
};
var myReducer=(state=initialState,actions)=>{
    
    switch(actions.type){
        
        case UserType.CheckOnline:
            state={
                userOnline:true,
                userOffline:false,
                user:{
                    user:actions.user
                }
            }
            return state;
        case UserType.CheckOffline:
            state={
                userOnline:false,
                userOffline:true
            }
            return state;
        
        default: return state;
    } 
}

export default myReducer;
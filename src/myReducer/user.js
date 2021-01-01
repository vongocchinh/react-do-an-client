import * as UserType from './../conStans/user';


var initialState='';
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case UserType.GET_USER_ACCOUNT:
            state=actions.user;
            return state;
        default: return state;
    } 
}

export default myReducer;
import * as UserType from './../conStans/user';


var initialState='';
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case UserType.USER_GET:
            var UserData=JSON.parse(localStorage.getItem('user'));
            state=UserData;
            return state;
        default: return state;
    } 
}

export default myReducer;
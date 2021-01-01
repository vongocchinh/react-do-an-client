import * as UserType from './../conStans/checkout';

var initialState=[];
var myReducer=(state=initialState,actions)=>{

    switch(actions.type){
        case UserType.GetAddressBill:
           state=actions.data;
            return state;
        default: return state;
    }
}

export default myReducer;
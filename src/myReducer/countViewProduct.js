import * as UserType from './../conStans/countViewProduct';

var initialState=[];
var myReducer=(state=initialState,actions)=>{

    switch(actions.type){
        case UserType.GET_COUNT_VIEW_PRODUCT:
           state=actions.data;
            return state;
        default: return state;
    }
}

export default myReducer;
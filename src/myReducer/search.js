import * as types from '../conStans/search';

var initialState={
    name:'',
    redirect:false
};


var myReducer=(state=initialState,actions)=>{
    switch (actions.type){

        case types.ON_SEARCH:
            state={
                name:actions.name,
                redirect:true
            }
            return state;
        case types.SUCCESS_SEARCH:
            state={
                name:'',
                redirect:false
            }
            return state;
        default: return state;
    }
}
export default myReducer;
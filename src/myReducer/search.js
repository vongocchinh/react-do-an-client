import * as types from '../conStans/search';
// import { getProductSearch } from './../actions/search';

var initialState={
    name:'',
    redirect:false,
    arr:[]
};


var myReducer=(state=initialState,actions)=>{
    switch (actions.type){

        case types.Search_Product_Success:
            var arr=JSON.parse(localStorage.getItem('search'));
            state={
                arr:arr,
                redirect:true
            }
            return state;
        case types.resetSearch:
            state={
                arr:arr,
                redirect:false
            }
            return state;
        case types.getProductSearch:
            var arr1=JSON.parse(localStorage.getItem('search'));
            state={
                arr:arr1,
                redirect:false
            }
            return state;
        default: return state;
    }
}
export default myReducer;
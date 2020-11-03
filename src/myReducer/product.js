import * as productTypes from '../conStans/product';

var initialState=[];
var myReducer=(state=initialState,action)=>{
    switch(action.type){

        case productTypes.PRODUCT_ALL:

            return [...state];

        default: return [...state];
    }
        

}
export default myReducer;
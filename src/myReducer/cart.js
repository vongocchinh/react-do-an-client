import * as cartTypes from './../conStans/cart';

var dataCart=JSON.parse(localStorage.getItem('cart'));
var initialState=dataCart?dataCart:[];

 var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case cartTypes.ADD_CART:
           
            var {cartProduct,quantity}=actions;
           
           
            var indexADD=findIndex(state,cartProduct.id);
           
            if(indexADD !== -1){
                state[indexADD].quantity+=quantity;
                
            }else{
                var cartNew={
                    cartProduct:cartProduct,
                    quantity:quantity
                }
    
                state.push(cartNew);
            }

            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case cartTypes.DELETE_CART:
            var id=actions.id;
            var index = findIndex(state,id);
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('cart',JSON.stringify(state));
        return [...state];
        case cartTypes.UPDATE_CART_T:

            var indexT=findIndex(state,actions.cartProduct.id);
            if(indexT !== -1){
                state[indexT].quantity+=1;
            }
            localStorage.setItem('cart',JSON.stringify(state));
        return [...state];

        case cartTypes.UPDATE_CART_G:
            var indexG=findIndex(state,actions.cartProduct.id);
            if(indexG !== -1){
                state[indexG].quantity-=1;
            }
            if(state[indexG].quantity < 1){
                state.splice(indexG,1);
            }
            localStorage.setItem('cart',JSON.stringify(state));
        return [...state];
        case cartTypes.FormatCart:
           
            state.splice(0,state.length);
                
            
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        default:return [...state];
    }
    
 }
 var findIndex=(state,id)=>{
    var result=-1;
    for(let i=0;i<state.length;i++){
        if(state[i].cartProduct.id===id){
            result=i;
            break;
        }
    }
    return result;
}
 export default myReducer;
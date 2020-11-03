
import * as type from './../conStans/search';
export const onSearch=(name)=>{
    return{
        type:type.ON_SEARCH,
        name
    }
}
export const Success_Search=()=>{
    return{
        type:type.SUCCESS_SEARCH
    }
}
export const PRODUCT_SEARCH=(product)=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        var data=firebase.database().reference('products').orderByChild('name').equalTo(product)
        console.log(data);
    }
}
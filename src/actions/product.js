import * as productType from '../conStans/product';

export const product=(product)=>{
    return {
        type:productType.PRODUCT_ALL,
        product
    }
}

export const PRODUCT_SEARCH=(product)=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        var data=firebase.database().reference('products').orderByChild('name').equalTo(product);
        console.log(data);
    }
}


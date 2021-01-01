import * as type from './../conStans/search';
import {db} from './../config/fbConfig';

export const Success_Search=()=>{
    return{
        type:type.SUCCESS_SEARCH
    }
}
export const PRODUCT_SEARCH=(product)=>{
      return (dispatch,getState,{getFirebase})=>{
        dispatch(Search_In());
        var arr=[];
        db.collection('products').where('name','>=',product).get().then(res=>{
            res.forEach(doc=>{
                var data={
                    id:doc.id,
                    data:doc.data()
                }
                arr.push(data);

            })
            localStorage.setItem('search',JSON.stringify(arr));
            dispatch(Search_Success(arr));
        }).catch(error=>{
            dispatch(Search_Error());
        })
    }
}
export const Search_Success=(arr)=>{
    return {
        type:type.Search_Product_Success,
        arr
    }
}
export const Search_In=()=>{
    return {
        type:type.Search_Product_In,
    }
}
export const Search_Error=()=>{
    return {
        type:type.Search_Product_Error,
    }
}
export const resetSearch=()=>{
    return {
        type:type.resetSearch
    }
}

export const getProductSearch=()=>{
    return {
        type:type.getProductSearch
    }
}
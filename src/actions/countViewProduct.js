import * as type from '../conStans/countViewProduct';
import {db} from './../config/fbConfig';
export const countProduct=(id)=>{
    return  (dispatch,getState,{getFirebase})=>{
        var arr=[];
        // var firebase=getFirebase().firestore();
        db.collection('viewProduct').get().then(res=>{
            res.forEach(doc=>{
                arr.push(doc.data());
            });
            dispatch(GET_COUNT_PRODUCT(arr));
        }).catch(res=>{
            //
        });
    }
}
export const GET_COUNT_PRODUCT=(data)=>{
    return{
        type:type.GET_COUNT_VIEW_PRODUCT,
        data
    }
}
export const insertCountView=(id)=>{
    return  (dispatch,getState,{getFirebase})=>{
    }
}
export const updateCountView=(id)=>{
    return  (dispatch,getState,{getFirebase})=>{
        db.collection('viewProduct').where('idProduct','==',id).get().then(res=>{
            var count=0;
                res.forEach(doc=>{
                    count=doc.data().count;
                    if(count>0){
                        db.collection('viewProduct').doc(id).set({
                            count:count+1,
                            idProduct:id
                        }).then(res=>{

                        }).catch(err=>{

                        })
                    }


           })
           if(count===0){
            db.collection('viewProduct').doc(id).set({
                count:1,
                idProduct:id
            }).then(res=>{

            }).catch(err=>{

            })
           }
        }).catch(err=>{

        })

    }
}
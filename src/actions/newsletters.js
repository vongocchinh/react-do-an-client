import * as types from '../conStans/newsletters';

export const newslettersAdd=(newsletter)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(newslettersIN());
        var firebase=getFirebase().firestore();
        var date=new Date();
        var newsletters={
           mail:newsletter,
           date:date
        }
        firebase.collection('newsletters').add(newsletters).then(()=>{
            dispatch(newslettersSuccess());
        }).catch(()=>{
            dispatch(newslettersError())
        });

    }
}
export const newslettersIN=()=>{
    return {
        type:types.ADD_newsletters
    }
}
export const newslettersSuccess=()=>{
    return {
        type:types.Success_newsletters
    }
}
export const newslettersError=()=>{
    return {
        type:types.Error_newsletters
    }
}
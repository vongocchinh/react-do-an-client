import * as action from '../conStans/review';
export const addReview=(review={})=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(REVIEW_IN());
        var firebase=getFirebase().firestore();
        var {
            id='',
            name='',
            rating='',
            email='',
            message=''
        }=review;
        var date=new Date();
        var reviews={
            idProduct:id,
            name,
            email,
            message,
            rating,
            date:date
        }
        firebase.collection('reviews').add(reviews).then(()=>{
            dispatch(REVIEW_SUCCESS());
        }).catch(()=>{
            dispatch(REVIEW_ERROR());
        });
    }
}

export const REVIEW_IN=()=>{
    return {
        type:action.REVIEW_IN
    }
}
export const REVIEW_SUCCESS=()=>{
    return {
        type:action.REVIEW_SUCCESS
    }
}
export const REVIEW_ERROR=()=>{
    return {
        type:action.REVIEW_ERROR
    }
}
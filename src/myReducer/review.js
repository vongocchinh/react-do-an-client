import * as types from './../actions/review';

var initialState={
    isReviewIn:false,
    isReviewSuccess:false,
    isReviewError:false,
}

var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case types.REVIEW_SUCCESS :
            state={
                isReviewIn:false,
                isReviewSuccess:true,
                isReviewError:false,
            }
            return state;
        case types.REVIEW_IN :
            state={
                isReviewIn:true,
                isReviewSuccess:false,
                isReviewError:false,
            }
            return state;
        case types.REVIEW_ERROR :
            state={
                isReviewIn:false,
                isReviewSuccess:false,
                isReviewError:true,
            }
            return state;
        default:return state;
    }
}
export default myReducer;

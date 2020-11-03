import * as types from './../conStans/bill';


var initialState={
    billDeleteRequest:false,
    billDeleteSuccess:false,
    billDeleteError:false,
    
};

 var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case types.BILL_DELETE_SUCCESS:
            state={
                billDeleteRequest:false,
                billDeleteSuccess:true,
                billDeleteError:false,
            }
        return state;
        case types.BILL_DELETE_REQUEST:
            state={
                billDeleteRequest:true,
                billDeleteSuccess:false,
                billDeleteError:false,
            }
        return state;
        case types.BILL_DELETE_ERROR:
            state={
                billDeleteRequest:false,
                billDeleteSuccess:false,
                billDeleteError:true,
            }
        return state;
        case types.BILL_DELETE_Reset:
            state={
                billDeleteRequest:false,
                billDeleteSuccess:false,
                billDeleteError:false,
            }
        return state;
        default: return state;
    }
    
}
export default myReducer;
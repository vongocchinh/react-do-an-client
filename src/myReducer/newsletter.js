import * as type from '../conStans/newsletters';

var initialState={
    newsletterIN:false,
    newsletterSuccess:false,
    newsletterError:false,
}
var myReducer=(state=initialState,actions)=>{
    switch (actions){
        case type.Error_newsletters:
            state={
                newsletterIN:false,
                newsletterSuccess:false,
                newsletterError:true,
            }

            return state;
        
        case type.Success_newsletters:
           
             state={
                newsletterIN:false,
                newsletterSuccess:true,
                newsletterError:false,
            }
            return state;
        
        default : return state;
    }
}
export default myReducer;
import * as typeContact from '../conStans/contact';


export const ADD_CONTACT_FETCH=(contact)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(IN_CONTACT());
        var firebase=getFirebase().firestore();
        var date=new Date();
        var {lastName='',
            firstName='',
            email='',
            phone='',
            message='',
        }=contact;
        var contacts={
            lastName,firstName,email,phone,message,date
        }
       setTimeout(() => {
            firebase.collection('contact').add(contacts).then(()=>{
                
                dispatch(SUCCESS_CONTACT());
            }).catch(()=>{
                dispatch(ERO_CONTACT());
            });
       }, 3000);
    }
    }

export const IN_CONTACT=()=>{
    
    return{
        type:typeContact.IN_CONTACT
    }
}
export const SUCCESS_CONTACT=()=>{
    return{
        type:typeContact.SUCCESS_CONTACT
    }
}
export const ERO_CONTACT=()=>{
    return{
        type:typeContact.ERO_CONTACT
    }
}
export const ResetMessageContact=()=>{
    return {
        type:typeContact.ResetMessageContact
    }
}
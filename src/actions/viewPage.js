import {db} from '../config/fbConfig';
export const counterViewPage=()=>{
    return (dispatch,getState,{getFirebase})=>{
        db.collection('viewPage').doc('YwWc3f93rDChyaTTgVFC').get().then(res=>{
            var count=res.data().count;
            db.collection('viewPage').doc('YwWc3f93rDChyaTTgVFC').set({
                count:count+1
            }).then(res=>{

            }).catch(err=>{
                //
            })
        }).catch(err=>{

        })
    }
}
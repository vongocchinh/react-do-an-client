import React, { Component } from 'react'
import Contact from './../../components/contact/contact';
import { connect } from 'react-redux';
import * as action from '../../actions/contact';

import * as actionSearch from '../../actions/search';
import { toast } from 'react-toastify';
// import { Redirect } from 'react-router-dom';
 class contact extends Component {
    render() {
        var {contactStore}=this.props;

        if(contactStore.CONTACT_SUCCESS){
            toast.success('Da gui thanh cong');
            setTimeout(() => {
                this.props.ResetMessageContact();
            }, 1000);
        }
        if(contactStore.CONTACT_ERO){
            toast.success('That bai.');
        }
        
        return (
           <Contact  
               contact={this.contact}
               contactStore={contactStore}
           />
        )
    }
    contact=(contact)=>{
        this.props.addContact(contact);
    }
    componentDidMount(){
        document.title="Contact..."
    }
}
export const mapStateToProps=(state)=>{
    return {
        contactStore:state.Contact,
        SearchStore:state.Search
    }
}
export const dispatchToProps=(dispatch,props)=>{
    return {
        addContact:(contact)=>{
            dispatch(action.ADD_CONTACT_FETCH(contact));
        },
        ResetMessageContact:()=>{
            dispatch(action.ResetMessageContact());
        },
        resetSearch:()=>{
            dispatch(actionSearch.resetSearch());
        }
    }
}
export default 
connect(mapStateToProps,dispatchToProps)
(contact);
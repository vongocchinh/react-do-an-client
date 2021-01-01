import React, { Component } from 'react'
import Footer from './../../components/layout/footer';
import { connect } from 'react-redux';
import * as action from '../../actions/newsletters';
import { toast } from 'react-toastify';

 class footer extends Component {
    render() {
        var {Newsletter}=this.props;

        if(Newsletter.newsletterSuccess){
            toast.success("Đăng kí thành công !!!");
        }
        return (
            <Footer 
                newserletter={this.newserletter}
             />
        )
    }
    newserletter=(newserletter)=>{
        this.props.newserletterAdd(newserletter);
    }
}
export const mapStateToProps=(state)=>{ 
    return{
        Newsletter:state.Newsletter
    }
}
export const dispatchToProps=(dispatch,props)=>{
    return{
        newserletterAdd:(newserletter)=>{
            dispatch(action.newslettersAdd(newserletter));
        }
    }
}
export default (connect(mapStateToProps,dispatchToProps))(footer);

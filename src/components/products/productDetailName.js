/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

 class productDetailName extends Component {
    render() {
        return (
            <div className="container-main">
            <div className="menu-dh">
                <Link to="/" href="###" className="menu-dh-link">Trang chủ&nbsp;&nbsp;&nbsp;/</Link>
                {this.showCategory(this.props.CategoryStore,this.props.data.category)}
                <a href="###" className="menu-dh-link color-red">{this.props.data.name}</a>
            </div>
            </div>
        )
    }
    showCategory=(data,id)=>{
        var result='';
        result=(data && data.map((data,key)=>{
            if(data.id===id){
                return   <a href="###" key={key} className="menu-dh-link">{data.categoryName}&nbsp;&nbsp;&nbsp;/</a>
            }
        }));
        return result;
    }
}
const mapStateToProps=(state)=>{
    return{
        CategoryStore:state.getFirestore.ordered.category
    }
}
export default
compose(connect(mapStateToProps,null),
firestoreConnect(own=>[
    {
        collection:"category"
    }
])) (productDetailName);

/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import ProductSearch from './../../components/productSearch/productSearch';
import { connect } from 'react-redux';
import * as action from './../../actions/search';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProductItem from '../../components/productSearch/productItem';

 class product extends Component {
    render() {
        var {Search}=this.props;
        if(Search.redirect){
            window.location.reload();
        }
        return (
            <ProductSearch 
            search={this.show(Search.arr)}
            />
        )
    }
    show=(data)=>{

        var result=null;
        result=data.map((arr,key)=>{
            if(arr.data.statusProduct===true){
                return <ProductItem 
                product={arr}
                key={key}
            />
            }

        })
        return result;
    }
    componentDidMount(){
        this.props.getProductSearch();
    }
}
    const mapStateToProps=(state)=>{
        return {
            Search:state.Search,
            ProductStore:state.getFirestore.ordered.products
        }
    }
    const dispatchToProps=(dispatch,props)=>{
        return{
            getProductSearch:()=>{
                dispatch(action.getProductSearch());
            }
        }
    }
export default compose(connect(mapStateToProps,dispatchToProps),firestoreConnect(own=>[{
    collection:"products"
}]))(product);
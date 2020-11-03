/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import ProductSearch from './../../components/productSearch/productSearch';
import { connect } from 'react-redux';
import * as action from './../../actions/search';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProductSearchItem from './../../components/productSearch/productItem';
 class product extends Component {
    render() {
        var {Search,ProductStore}=this.props;
        console.log(Search);
        return (
            <ProductSearch 
                showSearch={this.onSearch(ProductStore,Search.name)}
            />
        )
    }
    onSearch=(DATA,names)=>{
        var result=null;
        var dataProductSearch=null;
        if(DATA){
           setTimeout(() => {
            dataProductSearch=DATA.slice().filter((data)=>{
                console.log((data+"-----"+names));
                return data.name.toString().toLowerCase().indexOf(names.toString().toLowerCase()) > -1;
            });
            result=dataProductSearch.map((data,key)=>{
                return <ProductSearchItem 
                data={data}
                key={key} />
            })
           }, 5000);
        }else{
            return <p className="loading">Loading...</p>
        }
        return result;
    }
    UNSAFE_componentWillMount(){
        this.onWillSearch();
        
    }
    onWillSearch=()=>{
        this.props.onWillSearch();
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
            onWillSearch:()=>{
                dispatch(action.Success_Search());
            }
        }
    }
export default compose(connect(mapStateToProps,dispatchToProps),firestoreConnect(own=>[{
    collection:"products"
}]))(product);
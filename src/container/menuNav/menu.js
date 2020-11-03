import React, { Component } from 'react'
import Menu from '../../components/layout/menuNav/menu';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ItemBrand from './../../components/layout/menuNav/itemBrand';
import ItemCategory from './../../components/layout/menuNav/itemCategory';

 class menu extends Component {
    showBrand=(brands)=>{
        var result=null;
        result=brands&&brands.map((brand,key)=>{
            return <ItemBrand 
                brand={brand}
                key={key}
            />
        })
        return result;
    }
    showCategory=(caTeGoRys)=>{
        var result=null;
        result=caTeGoRys&&caTeGoRys.map((category,key)=>{
            return <ItemCategory
                category={category}
                key={key}
            />
        })
        return result;
    }
    render() {
        var {BrandFirestore,CategoryFirestore}=this.props;
        return (
            <Menu
                showBrand={this.showBrand(BrandFirestore)}
                showCategory={this.showCategory(CategoryFirestore)}
            />
        )
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
       
    }
}
const mapStateToProps=(state)=>{
    return{
        Search:state.Search,
        UserOnlineState:state.UserOnline,
        BrandFirestore:state.getFirestore.ordered.brand,
        CategoryFirestore:state.getFirestore.ordered.category
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),firestoreConnect(own=>[{
    collection:"brand"
},
{
    collection:"category"
}
]))
(menu);
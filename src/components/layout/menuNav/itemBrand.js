import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class itemBrand extends Component {
    render() {
        var {brand}=this.props;
        return (
            <>
                    <Link to={"/category/brand-"+brand.brandName+"/3"} className="menu-item-category" >Hãng {brand.brandName}</Link>
                    
            </>
        )
    }
}

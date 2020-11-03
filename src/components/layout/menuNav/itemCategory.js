import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as Format from './../../../conStans/format';
export default class itemCategory extends Component {
    render() {
        var {category}=this.props;
        return (
            <>
                    <Link to={"/category/"+Format.to_slug(category.categoryName)+"/2"} className="menu-item-category" >{category.categoryName}</Link>
                     
            </>
        )
    }
}

import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

export default class products extends Component {
    onSort=(name,value)=>{
        console.log("name");
    }
    
    render() {
        return (
            <div>
             <br/>
                <div className="container-main1">
                    <div className="search-container-top-list">
                    
                    </div>
                </div>
                <div className="container-main1">
                    <div className="container-product">
                        <div className="product-item-search-top">
                            <select  className="search-sort">
                                <option onClick={()=>this.onSort('name',1)}>Sort Name A-Z</option>
                                <option onClick={()=>this.onSort('name',-1)}>Sort Name Z-A</option>
                            </select>
                        </div>
                       {this.props.showProductCategory}
                    </div>
                </div>
                <br/>
                <div className="clear"></div>
            </div> 
        )
    }
}

import React, { Component } from 'react'

 class productSearch extends Component {
    render() {
        return (
            <>
            
             <div>
             <br/>
                <div className="container-main1">
                    <div className="search-container-top-list">
                        <a href="###" className="button-search-top-items">Iphone</a>
                        <a href="###" className="button-search-top-items">Oppo</a>
                        <a href="###" className="button-search-top-items">Samsung</a>
                        <a href="###" className="button-search-top-items">Realme</a>
                        <a href="###" className="button-search-top-items">Vsmart</a>
                    </div>
                </div>
                <div className="container-main1">
                    <div className="container-product">
                        <div className="product-item-search-top">
                            <select  className="search-sort">
                                <option>Name A-Z</option>
                                <option>Name Z-A</option>
                            </select>
                        </div>
                       {this.props.showSearch}
                    </div>
                </div>
                <br/>
                <div className="clear"></div>
            </div>   
            </>
        )
    }
}
export default productSearch;
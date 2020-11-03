import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class menu extends Component {
     category=()=>{
         
         return (
            <div className="menu-category">
                <div className="menu-category-left">
                    <Link to={"/"} className="menu-item-category" >All Brand</Link>
                   {this.props.showBrand}
                </div>
                <div className="menu-category-center">
                    
                   <Link to={"/category/dienthoai/1"} className="menu-item-category" >All Điện thoại</Link>
                    <Link to={"/category/samsung/1"} className="menu-item-category" >Điện thoại Samsung</Link>
                    <Link to={"/category/oppo/1"} className="menu-item-category" >Điện thoại Oppo</Link>
                    <Link to={"/category/iphone/1"} className="menu-item-category" >Điện thoại Iphone</Link>
                    <Link to={"/category/realme/1"} className="menu-item-category" >Điện thoại Realme</Link>
                </div>
                <div className="menu-category-left">
                    <Link to={"/"} className="menu-item-category" >All Category</Link>
                    {this.props.showCategory}
                </div>
                
            </div>
         );
     }
    render() {
        return (
            <>
                <div className="container-main-nav-menu">
                    <div className="container-main">
                        <div className="menu-footer-nav">
                       
                            <div className="menu-table-footer-nav">
                                <i className="fas fa-home" />&nbsp;
                                
                                    <Link to="/" className="menu-icon-index">Home</Link>
                                
                            </div>
                            
                            <div className="menu-table-footer-nav responsive-menu-400 category-hover-menu">
                                &nbsp;Category
                                {this.category()}
                            </div>
                            <div className="menu-table-footer-nav responsive-menu-400">&nbsp;Contact</div>
                            <div className="menu-table-footer-nav responsive-menu-400">&nbsp;
                                <Link to="/user" className="menu-icon-index">
                                    Myaccount
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </>
        )
    }
}
export default menu;
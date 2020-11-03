import React, { Component } from 'react'
import CartDh from './cartDH';

import TotalCart from './cartTotalPrice';
export default class cartList extends Component {
    render() {
        return (
            <div>
                <div className="container-main">
                    <div className="cart-top">
                        <a href="###" className="cart-dh-top">Trang chủ</a>&nbsp;&nbsp;/&nbsp;&nbsp;
                        <a href="###" className="cart-dh-top cart-color-EF4339">Giỏ Hàng</a>
                    </div>
                    </div>
                    <br />
                    <div className="container-main">
                    <div className="cart-table-container">
                        <h3>Giỏ Hàng Của Bạn</h3>
                        <div className="cart-table-container-main">
                        <table>
                            <tbody>


                            {this.props.showCart}
                            
                            
                            
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <br />
                    <div className="container-main">
                        <TotalCart/>
                    </div>
                    <div className="container-main">
                        <CartDh/>
                    </div>
                    <br />
                    <div className="clear"></div>
            </div>
        )
    }
}

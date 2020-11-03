import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class cartDH extends Component {
    render() {
        return (
            <>
                <div className="cart-button-dh-table">
                    <Link to="/" href="###" className="cart-button-submit-table">Tiếp Tục Mua Hàng</Link>
                    <Link to="/pay" href="###" className="cart-button-submit-table">Tiến Hành Thanh Toán</Link>
                </div>   
            </>
        )
    }
}

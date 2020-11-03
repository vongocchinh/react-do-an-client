import React, { Component } from 'react'

import * as Format from './../../conStans/format';
import { connect } from 'react-redux';
 class cartTotalPrice extends Component {
    format_currency=(price)=>{
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    render() {
       var {CartStore}=this.props;
        return (
            <>
               <div className="totalPriceCart">
                    <p><strong>Tổng:</strong></p>
                    <p>{Format.format_currency(Format.totalCartPrice(CartStore))} vnđ</p>
                </div> 
            </>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
        CartStore:state.Cart
    }
}
export default (connect(mapStateToProps,null))(cartTotalPrice);

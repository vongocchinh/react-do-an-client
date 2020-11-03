import React, { Component } from 'react'
import * as Format from '../../conStans/format';

export default class cartPayItem extends Component {
    render() {
        var {cart}=this.props;
        return (
            <>
                <tr>
                    <td className="pay-7">{cart.quantity}-{cart.cartProduct.name}</td>
                    <td className="pay-3">{Format.format_currency(Format.totalCartPriceItem(cart.cartProduct.price,cart.cartProduct.priceSale,cart.quantity))} ₫</td>
                </tr>
            </>
        )
    }
}

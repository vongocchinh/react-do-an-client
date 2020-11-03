/* eslint-disable no-useless-concat */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as Format from '../../conStans/format';
export default class cartItem extends Component {
    onDeleteCart=()=>{
        this.props.onDeleteCart(this.props.cart.cartProduct.id);
    }
    cartT=()=>{
        this.props.cartT(this.props.cart.cartProduct);
    }
    
    cartG=()=>{
        this.props.cartG(this.props.cart.cartProduct);
    }
    render() {
        var data=this.props.cart.cartProduct;
        var quantity=this.props.cart.quantity;
       
        return (
            <>
             <tr>
                    <td>
                    <span className="tbody-images-row">
                        <Link to={"/"+"product-detail"+"/"+data.id+"/"+Format.to_slug(data.name)+".html"}>
                            <img className="images-cart-table-row" alt="###" src={data.images1} />
                        </Link>
                    </span>
                    </td>
                    <td>
                    <span className="cart-table-name-row">{data.name}</span>
                    <span className="cart-table-name-row">{Format.format_currency(Format.priceSale(data.price,data.priceSale))} vnđ</span>
                    </td>
                    <td>
                    <span className="cart-quantity-table">
                        <span>
                        <button onClick={this.cartG} className="cart-button-add-table">-</button> 
                        </span>
                        <span type="hidden" style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="cart-quantity" min={1} max={20} defaultValue={1} >
                            {quantity}
                        </span>
                        <span>
                        <button onClick={this.cartT} className="cart-button-add-table">+</button> 
                        </span>
                    </span>
                    </td>
                    <td>
                    <span className="cart-price">
                        {Format.format_currency(Format.totalCartPriceItem(data.price,data.priceSale,quantity))} vnđ
                    </span>
                    </td>
                    <td onClick={this.onDeleteCart} className="cart-option-table">x</td>
                </tr>   
            </>
        )
    }
}

/* eslint-disable no-useless-concat */
import React, { Component } from 'react'
import * as Format from './../../conStans/format';
import  StarRatings  from 'react-star-ratings';
import { Link } from 'react-router-dom';
export default class productItem extends Component {
    render() {
        var {product}=this.props;
        return (
            <div className="product">

                <Link to={"/"+"product-detail"+"/"+product.id+"/"+Format.to_slug(product.data.name)+".html"}  href="###">
                    <div className="product-img">
                    <img alt="aasa" className="product-img-detail" src={product.data.images1} />
                    </div>
                    <div className="product-detail">
                        <p className="name-product">{product.data.name}</p>
                        <p className="price-product">
                            <strong>{Format.format_currency(product.data.price)} đ</strong> &nbsp;
                            <span><del>{Format.format_currency(Format.priceSale(product.data.price,product.data.priceSale))} d</del></span>&nbsp;
                        </p>
                        <span className="name-product ">
                            <StarRatings
                                    rating={product.data.star}
                                    starRatedColor="yellow"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="15px"
                                    starSpacing="2px"
                                />
                        </span>
                    </div>
                </Link>
            </div>
        )
    }
}

/* eslint-disable no-useless-concat */
import React, { Component } from 'react'
import * as Format from './../../conStans/format'; 
import { Link } from 'react-router-dom';
import  StarRatings  from 'react-star-ratings';
export default class productItem extends Component {
    render() {
        var {data}=this.props;
       
        return (
            <div className="product">
               <Link to={"/product-detail/"+data.id+"/"+Format.to_slug(data.name)+".html"}  >
                    <div className="product-img">
                        <img  alt="###" className="product-img-detail" src={data.images1} />
                    </div>
                    <div className="product-detail">
                        <p className="name-product">{data.name}</p>
                        <p className="price-product">
                        <strong>{Format.format_currency(data.price)} đ</strong> &nbsp;
                            <span><del>{Format.format_currency(Format.priceSale(data.price,data.priceSale))} d</del></span>&nbsp;
                        </p>
                        <span className="name-product ">
                            <StarRatings 
                                    rating={data.star}
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

/* eslint-disable no-useless-concat */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import * as Format from './../../conStans/format';
export default class productItemSale extends Component {
 
    render() {
        var {data}=this.props;
       
        return (
            <div className="product">
                
                <Link to={"/"+"product-detail"+"/"+data.id+"/"+Format.to_slug(data.name)+".html"}  href="###">
                    <div className="product-img">
                    <img alt="aasa" className="product-img-detail" src={data.images1} />
                    </div>
                    <div className="product-detail">
                        <p className="name-product">{data.name}</p>
                        {data.priceSale===0?
                        (<p className="price-product">
                            <strong>
                            {Format.format_currency(data.price)} đ
                            </strong> &nbsp;
                        </p>)
                        :
                        (<p className="price-product">
                            <strong>
                                {Format.format_currency(Format.priceSale(data.price,data.priceSale))} đ
                            </strong> &nbsp;
                            <span><del> {Format.format_currency(data.price)} đ</del></span>&nbsp;
                        </p>)}
                        <span className="name-product ">
                            <StarRatings 
                                    rating={data.star}
                                    starRatedColor="yellow"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="15px"
                                    starSpacing="2px"
                                />
                                &nbsp;
                                &nbsp;
                            <span style={{color:"#6666",fontSize:"12px"}}>({this.props.count})</span>
                        </span>
                    </div>
                </Link>
            </div>
        )
    }
}

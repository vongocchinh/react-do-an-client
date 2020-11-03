/* eslint-disable no-useless-concat */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as Format from '../../conStans/format';

export default class slider extends Component {
    
    render() {
        
        var {slide}=this.props;
        return (
           
           <div className="slider-main-img">
               <Link to={"/"+"product-detail"+"/"+slide.idProduct+"/"+Format.to_slug(slide.slidesName)+".html"}  href="###">
                    <img alt="" src={slide.slidesImages}/>
                </Link>
            </div>
           
        )
    }
}

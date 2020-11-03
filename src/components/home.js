import React, { Component } from 'react'


import PostProduct from './layout/postProduct';
import BGBanner from './images/2.jpg';
import IMAGES_3 from './images/1_1.jpg';
import IMAGES_2 from './images/1_5.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class home extends Component {
    
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
          };
        return (
            <div>
                 <div className="clear"></div>
                <div className="container-main">
                    <div className="slider-main-layout">
                        <div className="slider-main-left">
                        <Slider {...settings}>
                            {this.props.showSlides}
                        </Slider>
                        </div>
                        <div className="slider-main-right">
                            <div className="slider-main-right-top">
                                <img alt="" src={IMAGES_3}/>
                            </div>
                            <div className="slider-main-right-footer">
                                <img alt="" src={IMAGES_2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container-main">
                <hr />
                </div>
                <div className="clear" />
                
               
                <br/>
                    <div className="container-main1">
                        <div className="category-product">
                            <div className="category-phone">
                            <p><i className="fas fa-mobile-alt" />&nbsp;<strong>Điện Thoại</strong></p>
                            </div>
                            <div className="category-phone-item">
                            <a href="###">Sam sung</a>&nbsp;&nbsp;&nbsp;
                            <a href="###">oppo</a>&nbsp;&nbsp;&nbsp;
                            <a href="###">iphone</a>&nbsp;&nbsp;&nbsp;
                            <a href="###">Tất Cả</a>
                            </div>
                        </div>
                    </div>
                    <div className="container-main1">
                        <div className="container-product">
                            {this.props.showDataProduct}
                        </div>
                    </div>
                    
                    <div className="container-main">
                        <div className="images-banner">
                            <img alt="aasa" className="images-banner-main" src={BGBanner} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="container-main1">
                        <div className="category-product">
                            <div className="category-phone">
                            <p><i className="fas fa-mobile-alt" />&nbsp;<strong>Phụ kiện</strong></p>
                            </div>
                            <div className="category-phone-item">
                            <a href="###">Sam sung</a>&nbsp;&nbsp;&nbsp;
                            <a href="###">oppo</a>&nbsp;&nbsp;&nbsp;
                            <a href="###">iphone</a>&nbsp;&nbsp;&nbsp;
                            <a href="###">Tất Cả</a>
                            </div>
                        </div>
                    </div>
                    <div className="container-main1">
                        <div className="container-product">
                            {this.props.showProductAcceSsoRiEs}
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="container-main1">
                        <div className="category-product">
                            <div className="category-sale">
                            <p><i className="fas fa-mobile-alt" />&nbsp;<strong>Sản phẩm giá rẻ</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="container-main1">
                        <div className="container-product">
                            {this.props.showDataProductSale}
                        </div>
                    </div>
                    <br />
                    <br/>
                    <PostProduct/>
                    <div className="clear"></div>
                       
                </div>
        )
    }
}

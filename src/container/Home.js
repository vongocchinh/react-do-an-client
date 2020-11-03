/* eslint-disable array-callback-return */
import React, { Component  } from 'react'
import Home from '../components/home';
import ProductHomeItem from '../components/productHome/productPhone';
import ProductItemSale from '../components/productHome/productSale';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Slider from './../components/layout/slider';
import ProductAccessories from './../components/productHome/productAccessories';
import * as action from './../actions/user';
 class productHome extends Component {
    render() {
        var ProductRequest
        ProductRequest=this.props.Product;
        var {LoginRequest,SlideStore}=this.props;
        setTimeout(() => {
            this.props.reset_message_login();
        }, 1000);
        return (
           <div>
                <Home
                    showDataProduct={this.showDataProduct(ProductRequest)}
                    showDataProductSale={this.showDataProductSale(ProductRequest)}
                    LoginRequest={LoginRequest}
                    showSlides={this.showSlides(SlideStore)}
                    showProductAcceSsoRiEs={this.showProductAcceSsoRiEs(ProductRequest)}
                />
            </div>
        )
    }
    showSlides=(slides)=>{
        var result=null;
        if(slides){
            result=slides.map((slide,key)=>{
               if(slide.ruleSlides){
                    return <Slider
                    slide={slide}
                    key={key}
            />
               }
            })
        }else{
            return <p className="loading">loading...
            </p>
        }
        return result;
    }
    showDataProduct=(Data)=>{
        var result='';
        var count=0;
        if(Data){
            result=(Data && Data.map((data,key)=>{
                if(data.statusProduct&&count<10&&data.category==='VOuvvetUI7ZPERUBoFF0'){
                  count++;
                return <ProductHomeItem
                    data={data}
                    key={key}
                />
                }
            }))
        }else{
            return <div className="loading">
                    <img className="loading-images" src={"https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt="###" />

            </div>
        }
        return result;
    }
    showDataProductSale=(DATA)=>{
        var result='';
        var count=0;
        if(DATA){
            result=(DATA && DATA.map((data,key)=>{
                if(data.priceSale !== 0){
                if(data.statusProduct&&count<10){
                    count++;
                    return <ProductItemSale 
                    data={data}
                    key={key}
                />
                }
                }
            }));
        }else{
            return <p className="loading">
                <img className="loading-images" src={"https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt="###" />
            </p>
    }
        return result;
    }
    showProductAcceSsoRiEs=(products)=>{
        var result=null;
        var count=0;
        if(products){
            result=products.map((product,key)=>{
                if(product.category==='zI2UEXEVpenNmwrH29Y7'){
                    if(product.statusProduct&&count<10){
                        count++;
                        return <ProductAccessories
                            product={product}
                            key={key}
                             />
                    }
                }
            })
        }else{
            return <p className="loading">
                <img className="loading-images" src={"https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt="###" />

            </p>
    }
        return result;
    }
    componentDidMount(){
        document.title="Thế giới điện thoại thông minh.com...";
        this.props.getUser();
    }

}
const mapStateToProps=(state)=>{
    return{
        Product:state.getFirestore.ordered.products,
        LoginRequest:state.LoginRequest,
        SlideStore:state.getFirestore.ordered.slides
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        reset_message_login:()=>{
            dispatch(action.reset_message_login());
        },
        getUser:()=>{
            dispatch(action.USER_GET());
        }
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"products"
    },
    {
        collection:"slides"
    }
]))
(productHome);
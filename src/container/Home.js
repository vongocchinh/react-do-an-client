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
import * as actionViewPage from '../actions/viewPage';
 class productHome extends Component {
    render() {
        var ProductRequest;
        ProductRequest=this.props.Product;
        var {LoginRequest,SlideStore,Reviews}=this.props;
        if(LoginRequest.isLoggingSuccess){
            setTimeout(() => {
                window.location.reload();
                this.props.reset_message_login();
            }, 2600);
        }

        return (
           <div>
                <Home
                    showDataProduct={this.showDataProduct(ProductRequest,Reviews)}
                    showDataProductSale={this.showDataProductSale(ProductRequest,Reviews)}
                    LoginRequest={LoginRequest}
                    showSlides={this.showSlides(SlideStore)}
                    showProductAcceSsoRiEs={this.showProductAcceSsoRiEs(ProductRequest,Reviews)}
                />
            </div>
        )
    }
    countReviewProduct=(dataProduct,id)=>{
        var result=0;
       if(dataProduct){
        for(let i=0;i<dataProduct.length;i++){
            if(dataProduct[i].idProduct===id){
                result++;
            }
        }
       }
        return result;
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
    showDataProduct=(Data,review)=>{
        var result='';
        var count=0;
        if(Data){
            result=(Data && Data.map((data,key)=>{
                if(data.statusProduct&&count<10&&data.category==='VOuvvetUI7ZPERUBoFF0'){
                  count++;
                return <ProductHomeItem
                    data={data}
                    key={key}
                    count={this.countReviewProduct(review,data.id)}
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
    showDataProductSale=(DATA,review)=>{
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
                    count={this.countReviewProduct(review,data.id)}
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
    showProductAcceSsoRiEs=(products,review)=>{
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
                            count={this.countReviewProduct(review,product.id)}
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
        this.props.Get_User();
        this.counterViewPage();
    }
    counterViewPage=()=>{
        var counter=localStorage.getItem('viewIdPage');
        if(counter!=='3oEjI6SIIHBdRxXI40/200'){
            this.props.counterViewPage();
        }
        localStorage.setItem('viewIdPage','3oEjI6SIIHBdRxXI40/200');

    }
}
const mapStateToProps=(state)=>{
    return{
        Product:state.getFirestore.ordered.products,
        LoginRequest:state.LoginRequest,
        SlideStore:state.getFirestore.ordered.slides,
        Search:state.Search,
        Reviews:state.getFirestore.ordered.reviews
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        reset_message_login:()=>{
            dispatch(action.reset_message_login());
        },
        Get_User:()=>{
            dispatch(action.Get_User());
        },
        counterViewPage:()=>{
            dispatch(actionViewPage.counterViewPage());
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
    },
    {
        collection:"reviews"
    }
]))
(productHome);
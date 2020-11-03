/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import ProductCategory from './../components/products/productDetailName';
import ProductDetail from './../components/products/productDetail';
import ProductDetailTop from './../components/products/productDetailItem';

import ProductDetailDes from './../components/products/productDetailDes';
import ProductDetailDescription from './../components/products/productDetailDescription';
import * as actionsCart from './../actions/cart';
import * as actionReview from './../actions/review';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ReviewsDetail from './../components/products/review/reviewDetail';
import ReviewCount from './../components/products/reviewCount';
import ReviewItemCount from './../components/products/review/reviewItemCount';

 class productDetail extends Component {

    render() {
        var {ProductFireStore,ReviewFireStore}=this.props;
        
        var id=this.props.match.params.id;
        return (
            <div>
                <ProductDetail
                    showDataProductDetail={this.showDataProductDetail(ProductFireStore,id)}
                    showDataProductDetailName={this.showDataProductDetailName(ProductFireStore,id)}
                    showDataProductDetailDescription={this.showDataProductDetailDescription(ProductFireStore,id)}
                    showDataProductDetailDes={this.showDataProductDetailDes(ProductFireStore,id)}
                    addReview={this.addReview}
                    showReviews={this.showReviews(ReviewFireStore,id)}
                    ReviewCount={this.ReviewCount(ReviewFireStore,id)}
                />
            </div>
        )
    }
    ReviewCount=(review,id)=>{
       
        var reviewCount=0;
        var arr=[];
        var countStar1=0;
        var countStar2=0;
        var countStar3=0;
        var countStar4=0;
        var countStar5=0;
        if(review){
            for(let i=0;i<review.length;i++){
               if(review[i].idProduct===id){
                reviewCount++;
                if(review[i].rating===1){
                    countStar1++;
                }
                if(review[i].rating===2){
                    countStar2++;
                }
                if(review[i].rating===3){
                    countStar3++;
                }
                if(review[i].rating===4){
                    countStar4++;
                }
                if(review[i].rating===5){
                    countStar5++;
                }
               }
            }
        }
        arr.push(countStar1);
        arr.push(countStar2);
        arr.push(countStar3);
        arr.push(countStar4);
        arr.push(countStar5);
        return <ReviewCount
            reviewCount={reviewCount}
            reviewItemCount={this.showItemReviewCount(arr)}
        />
    }
    showItemReviewCount=(arr)=>{
        var result=null;
        result=arr.map((item,key)=>{
            return <ReviewItemCount
                item={item}
                key={key}
                keys={key}
            />
        })
        return result;
    }
    showDataProductDetail=(data,id)=>{
        var result='';
        result=(data && data.map((data,key)=>{
            if(data.id===id){
                return <ProductDetailTop
                    data={data}
                    key={key}
                    addCart={this.addCart}
                />
            }
        }))
        
        return result;
    }
    addCart=(cart,quantity)=>{
        this.props.addCart(cart,quantity);
    }
    showDataProductDetailName=(data,id)=>{
        var result='';
        result=(data&& data.map((data,key)=>{
            if(data.id===id){
                return <ProductCategory 
                    data={data}
                    key={key}
                />
            }
        }))

        return result;
    }
    showDataProductDetailDescription=(data,id)=>{
        var result='';
        result=(data&&data.map((data,key)=>{
            if(data.id===id){
                return <ProductDetailDescription description={data.description}
                    key={key}
                />
            }
        }))

        return result;
    }
    showDataProductDetailDes=(data,id)=>{
        var result='';
        result=(data&& data.map((data,key)=>{
            if(data.id===id){
                return <ProductDetailDes 
                    data={data}
                    key={key}
                />
            }
        }))

        return result;
    }
    sortReview=(review)=>{
        var result=null;
        if(review){
            result=review.slice().sort((a,b)=>{
                return b.date-a.date;
            })
        }
        return result;
    }
    showReviews=(data,id)=>{
        var result='';
        var count=0;
        data=this.sortReview(data);
        result=(data && data.map((data,key)=>{
            if(data.idProduct===id){
                count++;
                if(count<7){
                    return <ReviewsDetail 
                    key={key}
                    review={data}
                />
                }
            }
        }));
        return result;
    }
    addReview=(review)=>{
        var {id}=this.props.match.params;
        var reviewNew={
            id:id,
            name:review.name,
            rating:review.rating,
            email:review.email,
            message:review.message
        }
        this.props.addReview(reviewNew);
    }
}
const mapStateToProps=(state)=>{
    return{
        ProductFireStore:state.getFirestore.ordered.products,
        ReviewFireStore:state.getFirestore.ordered.reviews
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        addCart:(cartProduct,quantity)=>{
            dispatch(actionsCart.addCArt(cartProduct,quantity));
        },
        addReview:(review)=>{
            dispatch(actionReview.addReview(review));
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
        collection:"reviews"
    }
]))
(productDetail);
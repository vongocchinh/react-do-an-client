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
import * as actionLike from './../actions/like';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import * as actionCountProduct from '../actions/countViewProduct'
 class productDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentPageReview:1,
            currentPageReviewNew:7,
            countViewProduct:0,
        }
    }
    render() {
        var {ProductFireStore,ReviewFireStore,CountViewProducts}=this.props;
        var id=this.props.match.params.id;
        
        return (
            <div className="body-product-detail">
                <ProductDetail
                    showDataProductDetail={this.showDataProductDetail(ProductFireStore,id,ReviewFireStore,CountViewProducts)}
                    showDataProductDetailName={this.showDataProductDetailName(ProductFireStore,id)}
                    showDataProductDetailDescription={this.showDataProductDetailDescription(ProductFireStore,id)}
                    showDataProductDetailDes={this.showDataProductDetailDes(ProductFireStore,id)}
                    addReview={this.addReview}
                    showReviews={this.showReviews(ReviewFireStore,id)}
                    ReviewCount={this.ReviewCount(ReviewFireStore,id)}
                    showPaginationReview={this.showPaginationReview(ReviewFireStore,id)}
                    countReview={this.countReview(ReviewFireStore,id)}
                />
            </div>
        )
    }
    countViewProducts=(data,id)=>{
        var result=0;
        if(data){
            for(let i=0;i<data.length;i++){
                if(data[i].idProduct===id){
                    result=data[i].count;
                }
            }
        }
        return result;
    }
    componentDidMount(){
        var id=this.props.match.params.id;
        document.title="Sản phẩm...";
        this.props.countProduct();
        this.props.updateCountView(id);
    }
    showPaginationReview=(ReviewFireStore,id)=>{
        var counts=0;
        var arrPagination=[];
        var arrProductReview=[];
        var {currentPageReviewNew,currentPageReview}=this.state;
        if(ReviewFireStore){
           for(let i=0;i<ReviewFireStore.length;i++){
                if(ReviewFireStore[i].idProduct===id){
                    counts++;
                    arrProductReview.push(ReviewFireStore[i]);
                }
            };
        }
        for(let i=1;i<=Math.ceil(counts/currentPageReviewNew);i++){
            arrPagination.push(i);
        }
        return  <Pagination page={currentPageReview} onChange={this.onChangePaginationReview}  count={Math.ceil(counts/ currentPageReviewNew)} size="small" />
    }
    onChangePaginationReview=(e,value)=>{
        this.setState({
            currentPageReview:value
        });
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
    showDataProductDetail=(data,id,dataReview,CountViewProducts)=>{
        var result='';
        var count=0;
        var arr=[];
        if(dataReview){
            for(let i=0;i<dataReview.length;i++){
                if(dataReview[i].idProduct===id){
                    count++;
                }
            }
        }
        result=(data && data.map((data,key)=>{
            if(data.id===id){
                arr.push(data.images1);
                arr.push(data.images2);
                return <ProductDetailTop
                    data={data}
                    key={key}
                    addCart={this.addCart}
                    count={count}
                    arrImages={arr}
                    countView={(this.countViewProducts(CountViewProducts,id))}
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
    countReview=(data,id)=>{
        var count=0;
        if(data){
            for(let i=0;i<data.length;i++){
                if(data[i].idProduct===id){
                    count++;
                }
            }
        }
        return count;
    }
    showReviews=(dataStore,id)=>{
        var result='';
        var dataReview=[];
        var {User}=this.props;
        if(User.userEmail){
            if(dataStore){
                for(let i=0;i<dataStore.length;i++){
                     if(dataStore[i].idProduct===id){
                         dataReview.push(dataStore[i]);
                     }
                 };
             }
             dataReview=this.sortReview(dataReview);
             var {currentPageReview,currentPageReviewNew}=this.state;
             var reviewLast=currentPageReviewNew*currentPageReview;
             var reviewFirst=reviewLast- currentPageReviewNew;
             var data=dataReview.slice(reviewFirst,reviewLast);
             result=(data && data.map((data,key)=>{
                         return <ReviewsDetail
                         key={key}
                         review={data}
                         onClickLike={this.onClickLike}
                     />
             }));
        }else{
            result=<Link to="/loginPage"><p style={{fontSize:"14px",color:"black"}}>
                <i>
                    <u>
                        Đăng nhập để xem đánh giá từ khách hàng
                    </u>
                </i>
            </p></Link>
        }
        return result;
    }
    onClickLike=(likes)=>{
        var {User}=this.props;
       if(User){
            if(User.uid){
                var likeUser={
                    like:likes.like,
                    idCmt:likes.idCmt,
                    idUser:User.uid
                }
                this.props.addLike(likeUser);
                console.log(likeUser);
            }
        }
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
        ReviewFireStore:state.getFirestore.ordered.reviews,
        User:state.User,
        CountViewProducts:state.CountViewProduct,
        ViewProductFirebase:state.getFirestore.ordered.viewProduct,
        viewProduct:state.getFirestore.ordered.viewProduct
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        addCart:(cartProduct,quantity)=>{
            dispatch(actionsCart.addCArt(cartProduct,quantity));
        },
        addReview:(review)=>{
            dispatch(actionReview.addReview(review));
        },
        addLike:(likes)=>{
            dispatch(actionLike.addLikeCmt(likes));
        },
        countProduct:(id)=>{
            dispatch(actionCountProduct.countProduct(id));
        },
        updateCountView:(count)=>{
            dispatch(actionCountProduct.updateCountView(count));
        },
        insertCountView:(id)=>{
            dispatch(actionCountProduct.insertCountView(id));
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
    },
    {
        collection:"viewProduct"
    }
]))
(productDetail);
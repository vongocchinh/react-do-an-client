
import React, { Component } from 'react'
import ReviewForm from './review/reviewForm';
// import ReviewCount from './reviewCount';
 class cart extends Component {
    onCart=()=>{
        this.props.onCart(this.props.data);
    }
    render() {

        return (
                <>
                {this.props.showDataProductDetailName}
                <div className="container-main">
                    {this.props.showDataProductDetail}
                </div>
                <div className="clear"></div>
                <br />
                <div className="clear" />
                <div className="container-main">
                    <div className="clear" />
                    <div className="product-detail-description">
                        <div className="product-detail-description-left">
                            <h3>Mô Tả Sản Phẩm</h3>
                            {this.props.showDataProductDetailDescription}
                        </div>
                        <div className="product-detail-description-right">
                            <h3> THÔNG SỐ KỸ THUẬT</h3>
                            {this.props.showDataProductDetailDes}
                        </div>
                    </div>
                </div>
                    <br />
                    <div className="clear" />
                    <div className="clear" />
                    <div className="comment-container-layout">
                        <ReviewForm 
                            addReview={this.props.addReview}
                        />
                        <hr className="hr-comment" />
                        {this.props.ReviewCount}
                        <hr className="hr-comment" />
                        <div className="comment-container-main">
                        <p style={{marginTop:"20px"}}><strong>Reviews</strong></p>
                            {this.props.showReviews}
                            <div className="comment-product-details-row">
                                {this.props.showPaginationReview}
                                {/* <div >
                                    <span className="pagination">1</span>
                                    <span className="pagination">1</span>
                                    <span className="pagination">1</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
            </>
        )
    }
}

export default cart;

import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
class commentDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            like:false
        }
        
    }
    onClick=()=>{
        this.setState({
            like:!this.state.like
        });
    }
    render() {
        var {review}=this.props;
        return (
            
            <div className="comment-container-main-row">
                <div className="comment-container-main-left">
                    <img src={"https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg"} alt="###" />
                </div>
                <div className="comment-container-main-right">
                        <p className="comment-product-name-row"><strong>{review.name}</strong></p>
                        <div className="comment-product-comment-row">
                            <span className="comment-product-comment-row-star">
                            <StarRatings
                                starRatedColor="#FFA500"
                                numberOfStars={5}
                                rating={review.rating}
                                starDimension="15px"
                                starSpacing="1px"
                                />
                            </span>
                            <span>
                                {review.message}
                            </span>
                        </div>
                        <p className="comment-product-controller-control">
                    <span className="comment-product-controller-control-comment">Thảo Luận</span><span onClick={this.onClick} className="comment-product-controller-control-like">{this.state.like?'Đã Thích':'Thích'}</span>
                </p>
                </div>
            </div>
        )
    }
}
export default commentDetail;
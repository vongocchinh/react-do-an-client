import React, { Component } from 'react'

export default class reviewCount extends Component {
    render() {
        return (
            <div className="review-product">
                {/* <span className="heading">User Rating</span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> */}
                <p style={{fontSize:"13px"}}>{this.props.reviewCount} Bình Luận Về Sản Phẩm.</p>
                

                {this.props.reviewItemCount}

            </div>
        )
    }
}

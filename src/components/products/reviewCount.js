import React, { Component } from 'react'

export default class reviewCount extends Component {
    render() {
        return (
            <div className="review-product">
                <span className="heading">User Rating</span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <p>Product on {this.props.reviewCount} reviews.</p>
                

                {this.props.reviewItemCount}

            </div>
        )
    }
}

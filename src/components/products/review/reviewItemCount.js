import React, { Component } from 'react'

export default class reviewItemCount extends Component {
    
    render() {
        var{item,keys}=this.props;
        return (
            <div className="row">
                    <div className="review-side">
                        <div>{keys+1} star</div>
                    </div>
                    <div className="review-middle">
                        <div className="review-bar-container">
                            <div className={"review-bar"+(keys+1)} style={{width:(item/10)+"%"}}></div>
                        </div>
                    </div>
                    <div className="review-side right">
                        <div>{item}</div>
                    </div>
                </div>
        )
    }
}

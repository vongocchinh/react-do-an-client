import React, { Component } from 'react'

export default class reviewItemCount extends Component {
    
    render() {
        var{item,keys}=this.props;
        return (
            <div className="row">
                    <div className="review-side">
                        <div><span style={{fontSize:"12px",color:"#2A2D2E"}}>{keys+1}</span>&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-star checked" style={{fontSize:"18px"}}></span>
                        </div>
                    </div>
                    <div className="review-middle">
                        <div className="review-bar-container">
                            <div className={"review-bar"+(keys+1)} style={{width:(item/10)+"%"}}></div>
                        </div>
                    </div>
                    <div className="review-side right">
                        <div> <span style={{fontSize:"13px",color:"#007ACC"}}>{item} Đánh Giá</span></div>
                    </div>
                </div>
        )
    }
}

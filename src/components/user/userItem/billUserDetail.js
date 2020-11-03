import React, { Component } from 'react';

 class billUserDetail extends Component {
    render() {
       
        return (
            <div className="bill-container-main">
        <div className="bill-main-top">
          <p className="bill-main-top-p">Đơn Hàng Của Bạn</p>
        </div>
            {this.props.showBillUserDetail}
            {this.props.showStepper}
      </div>
        )
    }
}
export default billUserDetail;
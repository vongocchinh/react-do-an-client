import React, { Component } from 'react'
import BGFooter1 from './../images/2_1.jpg';
import BGFooter2 from './../images/2_2.jpg'; 
import BGFooter3 from './../images/2_3.jpg'; 
 class trainingProduct extends Component {
    render() {
        return (
            <>
                <div className="clear"></div>
                <div className="container-main">
                    <div className="banner-litter">
                        <img src={BGFooter1} alt="" className="class-images-litter"/>
                        <img src={BGFooter2} alt="" className="class-images-litter"/>
                    </div>
                </div>
                <br/>
                <div className="container-main">
                    <div className="introduce">
                        <div className="introduce-category">
                            <div className="vanCh">
                                <i className="fas fa-truck"></i>&nbsp;
                                <h4>Miễn phí nội thành ĐN - QN</h4>
                            </div>
                            <div className="thanhTo">
                                <i className="fas fa-hand-holding-usd"></i>&nbsp;
                                <h4>Thanh toán khi nhận hàng</h4>
                            </div>
                            <div className="doiTra">
                                <i className="fas fa-tasks"></i>&nbsp;
                                <h4>ĐỔI TRẢ HÀNG</h4>
                            </div>
                        </div>
                        <div className="introduce-post">
                            <h2>Tin Hay Mỗi Ngày</h2>
                            <div className="introduce-post-main">
                                <div className="introduce-post-images">
                                    <img src={BGFooter3} alt=""/>
                                </div>
                                <div className="introduce-post-detail">
                                    <h2>Điểm danh những smartPhone chơi game cực tốt.</h2>
                                    <p>Ngày Đăng: 21/10/2000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="clear"></div>
            </>
        )
    }
}
export default trainingProduct;
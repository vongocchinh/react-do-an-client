import React, { Component } from 'react'
// import BackToTop from "react-back-to-top-button";
export default class footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            newserletter:'',
            backOnTop:false
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {newserletter}=this.state;
        this.props.newserletter(newserletter);
        this.setState({
            newserletter:''
        });
        e.target.reset();
    }
  
    componentDidMount(){
        var scrollComponent = this;
            document.addEventListener("scroll", ()=> {
            scrollComponent.toggleVisibility();
            });
    }
    toggleVisibility=()=> {
        if (window.pageYOffset > 300) {
          this.setState({
            backOnTop: true
          });
        } else {
          this.setState({
            backOnTop: false
          });
        }
      }
      scrollToTop=()=> {
        window.scrollTo({
          top: 0,
          behavior:"smooth"
        });
      }
    render() {
        var {backOnTop}=this.state;
        return (
            <>
                <div className="footer-top-main">
                {backOnTop ? <span className="back-on-top"  onClick={this.scrollToTop}>
                     <i className='far fa-arrow-alt-circle-up' ></i>
                </span> : '' }
                    <div className="images-footer">
                        <div className="images-footer-img">
                        <img alt="###" src="/images/banner_newsletter.png" />
                        </div>
                        <div className="newsletter">
                        <form  onSubmit={this.onSubmit}>
                            <input onChange={this.onChange} className="input" autoComplete="off" name="newserletter" type="text" placeholder="Nhập email của bạn ..." />
                            <input  className="sb" type="submit" defaultValue="Email" />
                        </form>
                        </div>
                    </div>
                </div>
                <div className="container-footer-main">
                    <div className="images-footer-main">
                        <div className="col-ft">
                            <h4>Trụ sở ,Chi nhánh</h4>
                            <p><strong>Trụ sở TP.Hồ Chí Minh:</strong> 180 - 182 Lý Chính Thắng, Phường 9, Q.3</p>
                            <p><strong>Chi nhánh Hà Nội:</strong> Tầng 4, số 01, ngõ 120 Trường Chinh, Phương Mai, Q.Đống Đa, Hà Nội</p>
                            <p><strong>Chi nhánh Đà Nẵng:</strong> 35 Dương Thưởng, P.Hòa Cường Bắc, Q. Hải Châu, TP Đà Nẵng</p>
                            <p><strong>Chi nhánh Bà Rịa - Vũng Tàu:</strong> 121 Lý Tự Trọng, Phường 3, TP Vũng Tàu</p>
                            <p><strong>Chi nhánh Cần Thơ:</strong> 1227/7 Trần Bình Trọng, Q.Ninh Kiều, TP Cần Thơ</p>
                            <p><strong>Trụ sở TP.Hồ Chí Minh:</strong> 180 - 182 Lý Chính Thắng, Phường 9, Q.3</p>
                            <p><strong>Chi nhánh Hà Nội:</strong> Tầng 4, số 01, ngõ 120 Trường Chinh, Phương Mai, Q.Đống Đa, Hà Nội</p>
                            <p><strong>Chi nhánh Hà Nội:</strong> Tầng 4, số 01, ngõ 120 Trường Chinh, Phương Mai, Q.Đống Đa, Hà Nội</p>
                            <p><strong>Chi nhánh Đà Nẵng:</strong> 35 Dương Thưởng, P.Hòa Cường Bắc, Q. Hải Châu, TP Đà Nẵng</p>
                            <p><strong>Chi nhánh Bà Rịa - Vũng Tàu:</strong> 121 Lý Tự Trọng, Phường 3, TP Vũng Tàu</p>
                        </div>
                        <div className="clear"></div>
                        <div className="col-ft">
                            <h4>Chính sách công ty</h4>
                            <p>Hướng dẫn đặt hàng</p>
                            <p>Hình thức thanh toán</p>
                            <p>Hướng dẫn sử dụng</p>
                            <p>Sử dụng voucher/e-voucher</p>
                            <p>Phương thức vận chuyển</p>
                            <p>Chính sách đổi trả</p>
                            <p>Hướng dẫn đặt hàng</p>
                            <p>Hình thức thanh toán</p>
                            <p>Hướng dẫn sử dụng</p>
                            <p>Sử dụng voucher/e-voucher</p>
                            <p>Phương thức vận chuyển</p>
                            <p>Chính sách đổi trả</p>
                        </div>
                        <div className="clear"></div>
                        <div className="col-ft ">
                            <h4>Trụ sở ,Chi nhánh</h4>
                            <p><strong>Trụ sở TP.Hồ Chí Minh:</strong> 180 - 182 Lý Chính Thắng, Phường 9, Q.3</p>
                            <p><strong>Chi nhánh Hà Nội:</strong> Tầng 4, số 01, ngõ 120 Trường Chinh, Phương Mai, Q.Đống Đa, Hà Nội</p>
                            <p><strong>Chi nhánh Đà Nẵng:</strong> 35 Dương Thưởng, P.Hòa Cường Bắc, Q. Hải Châu, TP Đà Nẵng</p>
                            <p><strong>Chi nhánh Bà Rịa - Vũng Tàu:</strong> 121 Lý Tự Trọng, Phường 3, TP Vũng Tàu</p>
                            <p><strong>Chi nhánh Cần Thơ:</strong> 1227/7 Trần Bình Trọng, Q.Ninh Kiều, TP Cần Thơ</p>
                            <p><strong>Trụ sở TP.Hồ Chí Minh:</strong> 180 - 182 Lý Chính Thắng, Phường 9, Q.3</p>
                            <p><strong>Chi nhánh Hà Nội:</strong> Tầng 4, số 01, ngõ 120 Trường Chinh, Phương Mai, Q.Đống Đa, Hà Nội</p>
                            <p><strong>Chi nhánh Đà Nẵng:</strong> 35 Dương Thưởng, P.Hòa Cường Bắc, Q. Hải Châu, TP Đà Nẵng</p>
                            <p><strong>Chi nhánh Bà Rịa - Vũng Tàu:</strong> 121 Lý Tự Trọng, Phường 3, TP Vũng Tàu</p>
                        </div>
                        <div className="clear"></div>
                        <div className="col-ft">
                            <h4>Chấp Nhận Thanh Toán</h4>
                            <img alt="###" src="/images/payment (1).png" />
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </>
        )
    }
}

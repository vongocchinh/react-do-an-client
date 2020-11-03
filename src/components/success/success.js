import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

var steps=[{"label":"Đang xác nhận"},{"label":"Đã Xác Nhận"},{"label":"Đang Vận Chuyển"},{"label":"Đã Giao Hàng"}]

class success extends Component {
     home=()=>{
         return <Link to="/"></Link>
     }
    render() {
    
        return (
            
                <div  className="success-container">
                    <div style={{width:"700px"}}>
                        <p>Đặt hàng thành công.Đang chờ xác nhận</p>
                        <Stepper alternativeLabel >
                            {steps.map((item,key) => (
                            <Step key={key}>
                                <StepLabel>{item.label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                       
                        <div className="action-success">
                            <p>Đang chờ nhà bán hàng xử lý.Vui lòng đợi và thường xuyên check đơn hàng.</p>
                            <div className="button-success">
                                <Button onClick={this.home} variant="contained" color="secondary" className="success-bt" style={{marginTop:"10px"}}>
                                   <Link to="/" className="success-home">Trang chủ</Link>
                                </Button>
                                <Button className="success-bt" style={{marginTop:"10px"}} variant="contained">Hủy Đơn Hàng</Button>
                                <Button className="success-bt" style={{marginTop:"10px"}} variant="contained" color="primary">
                                    Liên Hệ Nhà Bán Hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
export default  success;

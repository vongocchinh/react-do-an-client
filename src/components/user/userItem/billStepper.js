import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
var steps=[{"label":"Đang xác nhận"},{"label":"Đã Xác Nhận"},{"label":"Đang Vận Chuyển"},{"label":"Đã Giao Hàng"}]

export default class billStepper extends Component {
    showStepper=(item)=>{
        var result=0;
        switch (item){
            case 1:
            result=1;
            break;
            case 2:
            result=2;
            break;
            case 3:
            result=3;
            break;
            case 4:
            result=4;
            break;
            default : return result;
        }
        return result;
    }
    render() {
        return (
            <div  className="success-container">
                <div style={{width:"700px"}}>
                        <Stepper activeStep={this.showStepper(this.props.rulesBill)} alternativeLabel >
                            {steps.map((item,key) => (
                            <Step key={key}>
                                <StepLabel>{item.label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                </div>
            </div>
        )
    }
}

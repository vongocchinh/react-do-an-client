import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
var steps=[{"label":"Đang xác nhận"},{"label":"Đã Xác Nhận"},{"label":"Đang Vận Chuyển"},{"label":"Đã Giao Hàng"}]

export default class billStepper extends Component {
    showStepper=(item)=>{
        var result=0;
        if(item===false){
            result=1;
        }else{
            result=2;
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

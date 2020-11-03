import React, { Component } from 'react'

export default class productDetailDes extends Component {
    showPhone=(data)=>{
        if(data.category==='VOuvvetUI7ZPERUBoFF0'){
            return (<div className="description-tSKT">
            <table>
            <tbody><tr><td className="td-left">Màn hình :</td><td>{data.manhinh}</td></tr>
                <tr><td className="td-left">Camera trước :</td><td>{data.camBefore}</td></tr>
                <tr><td className="td-left">Camera sau :</td><td>{data.camAfter}</td></tr>
                <tr><td className="td-left">RAM :</td><td>{data.ram}</td></tr>
                <tr><td className="td-left">Bộ nhớ trong :</td><td>{data.rom}</td></tr>
                <tr><td className="td-left">CPU :</td><td>{data.cpu}</td></tr>
                <tr><td className="td-left">GPU :</td><td>{data.gpu}</td></tr>
                <tr><td className="td-left">Dung lượng pin :</td><td>{data.pin}</td></tr>
            </tbody></table>
        </div>)
        }
    }
    render() {
        var {data}=this.props;
        return (
            <>
                {this.showPhone(data)}
            </>
        )
    }
}

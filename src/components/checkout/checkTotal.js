import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Format from '../../conStans/format';

 class checkTotal extends Component {
    render() {
        return (
            <>
                <p className="pd-left-pay">{Format.format_currency(Format.totalCartPrice(this.props.cartStore))} vnđ</p>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        cartStore:state.Cart
    }
}
export default (connect(mapStateToProps,null))(checkTotal);
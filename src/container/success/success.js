import React, { Component } from 'react'
import { connect } from 'react-redux';
import Success from './../../components/success/success';

class success extends Component {
    render() {

        return (
            <Success/>
        )
    }
    componentDidMount(){
        document.title="Thành công..."
    }
}

const mapStateToProps=(state)=>{
    return {
        CheckMessage:state.CheckOut
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
    }
}
export default 
connect(mapStateToProps,dispatchToProps)
(success);
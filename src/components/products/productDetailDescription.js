import React, { Component } from 'react'
import parser from 'html-react-parser'
export default class productDetailDescription extends Component {
    render() {
      
    return (
            <div className="description">
                {parser(this.props.description)}
            </div>
            )
    }
}

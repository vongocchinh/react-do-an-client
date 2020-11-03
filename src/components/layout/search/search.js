import React, { Component } from 'react'


class search extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            redirectSearch:false
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            redirectSearch:true
        });
        var {name}=this.state;
        this.props.search(name);
        this.setState({
            name:''
        });
    }
    render() {
       
        return (
            <form className="search" onSubmit={this.onSubmit}>
                <input type="search" className="input-search" placeholder="Bạn cần tìm gì hôm nay... " onChange={this.onChange} name="name" />
                <input type="submit" className="submit-search" value="Tìm" />
            </form>
        )
    }
}
export default  search;
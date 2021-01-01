import React, { Component } from 'react'


class search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchName:'',
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
        var {searchName}=this.state;
        this.props.search(searchName);
        e.target.reset();
        this.setState({
            searchName:''
        });
    }
    render() {
        return (
            <form className="search" onSubmit={this.onSubmit}>
                <input  type="search" required autoComplete="on" className="input-search" placeholder="Bạn cần tìm gì hôm nay... " onChange={this.onChange} name="searchName" />
                <input type="submit" className="submit-search" value="Tìm" />
            </form>
        )
    }
}
export default  search;
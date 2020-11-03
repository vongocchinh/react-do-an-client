/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Products from '../../components/brand/products';
import ProductItem from '../../components/brand/productItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

 class product extends Component {
     constructor(props) {
         super(props);
         this.state={
            name:'',
            value:1,
            currentPage:1,
            newPaperPage:10
         }
     }
    render() {
        var name=this.props.match.params.name;
        var id=parseInt(this.props.match.params.id,10);
        return (
           <Products 
               showProductCategory={this.showProductCategory(this.props.Product,name,id)}
               sort={this.sort}
           />
        )
    }
    sort=(name,value)=>{
        console.log(name);
    }
    showProductCategory=(Datas,name,id)=>{
        var result='';
        // var {currentPage,newPaperPage}=this.state;
        // const LastPage=currentPage*newPaperPage;
        // const FirstPage=LastPage - newPaperPage;
        if(Datas&&id){
            result=Datas.map((data,key)=>{
                switch(id){
                    case 1:
                        switch(name){
                            case 'dienthoai':
                                if(data.statusProduct===true&&data.category==='VOuvvetUI7ZPERUBoFF0'){
                                    return <ProductItem
                                        data={data}
                                        key={key}
                                    />
                                    }
                                return;
                                case 'iphone':
                                    if(data.statusProduct===true&&data.category==='VOuvvetUI7ZPERUBoFF0'&&data.brand==='hQQ2jBnPjvilkwB3rl10'){
                                        return <ProductItem
                                            data={data}
                                            key={key}
                                        />
                                        }
                                    return;
                                case 'samsung':
                                    if(data.statusProduct===true&&data.category==='VOuvvetUI7ZPERUBoFF0'&&data.brand==='gE2jQZ38FGZhwAWBlXNu'){
                                        return <ProductItem
                                            data={data}
                                            key={key}
                                        />
                                        }
                                    return;
                                case 'oppo':
                                    if(data.statusProduct===true&&data.category==='VOuvvetUI7ZPERUBoFF0'&&data.brand==='w6uk2i6D1cr1896Wo0c3'){
                                        return <ProductItem
                                            data={data}
                                            key={key}
                                        />
                                        }
                                    return;
                                case 'realme':
                                    if(data.statusProduct===true&&data.category==='VOuvvetUI7ZPERUBoFF0'&&data.brand==='7hXvXOi2THmiIIOlf5rP'){
                                        return <ProductItem
                                            data={data}
                                            key={key}
                                        />
                                        }
                                    return;
                                case 'vsmart':
                                    if(data.statusProduct===true&&data.category==='VOuvvetUI7ZPERUBoFF0'&&data.brand==='feOmHqwnRRP0nSc9Y91R'){
                                        return <ProductItem
                                            data={data}
                                            key={key}
                                        />
                                        }
                                    return;
                                case 'xiaomi':
                                    if(data.statusProduct===true&&data.category==='VOuvvetUI7ZPERUBoFF0'&&data.brand==='fChE9dM4WzRelE9WFOEB'){
                                        return <ProductItem
                                            data={data}
                                            key={key}
                                        />
                                        }
                                    return;
                            default: return ;
                        }
                    case 2:
                        switch (name){
                            case 'dien-thoai':
                                if(data.statusProduct&&data.category==='VOuvvetUI7ZPERUBoFF0'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                 />
                                }
                                return;
                            case 'phu-kien':
                                if(data.statusProduct&&data.category==='zI2UEXEVpenNmwrH29Y7'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                 />
                                }
                                return;
                            case 'laptop':
                                if(data.statusProduct&&data.category==='Dr2g7kHczOgEzcde2GQT'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                 />
                                }
                                    return;

                            case 'dong-ho':
                                if(data.statusProduct&&data.category==='vdGeCrcsyB8fqrlPgmaa'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                 />
                                }
                                return;
                            default : return;
                        }
                    case 3:

                        switch(name){
                            case 'brand-Realme':
                                if(data.statusProduct&&data.brand==='7hXvXOi2THmiIIOlf5rP'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            case 'brand-Sony':
                                if(data.statusProduct&&data.brand==='LyheDGUlyaGKYYNmk0P6'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            case 'brand-Xiaomi Redmi':
                                if(data.statusProduct&&data.brand==='fChE9dM4WzRelE9WFOEB'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            case 'brand-Vsmart':
                                if(data.statusProduct&&data.brand==='feOmHqwnRRP0nSc9Y91R'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            case 'brand-Samsung':
                                if(data.statusProduct&&data.brand==='gE2jQZ38FGZhwAWBlXNu'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            case 'brand-Apple':
                                if(data.statusProduct&&data.brand==='hQQ2jBnPjvilkwB3rl10'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            case 'brand-Oppo':
                                if(data.statusProduct&&data.brand==='w6uk2i6D1cr1896Wo0c3'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            case 'brand-Lenovo':
                                if(data.statusProduct&&data.brand==='yBJxwqMFaoblOsdhmUqH'){
                                    return <ProductItem
                                    data={data}
                                    key={key}
                                    />
                                }
                                return ;
                            default : return;
                        }
                    default: return ;
                }
            });
        }else{
            return <p className="loading">Loading...</p>
        }
        return result;
    }
 }
const mapStateToProps=(state)=>{
    return{
        Product:state.getFirestore.ordered.products,
        LoginRequest:state.LoginRequest
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{

    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"products"
    }
]))
(product);
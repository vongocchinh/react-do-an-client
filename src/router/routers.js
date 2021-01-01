import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import HOME from '../container/Home';
import CART from '../container/cart';
import ProductDetail from '../container/productDetail';
import LoginPage from '../container/user/login';
import Logout from '../container/user/logout';
import RegisterPage from '../container/user/registerUser';
import User from '../container/user/user';
import UserEdit from '../container/user/update';
import Success from '../container/success/success';
import checkout from '../container/checkout';
import Search from '../container/productSearch/product';
import category from '../container/productBrand/product';
import BillDetail from '../container/user/billDetail';
import Password from './../container/password/password';
import Contact from './../container/contact/contact';

class routers extends Component {
    render() {
        return (
             <div>
                <Switch>
                    <Route  path="/home" component={HOME}></Route>
                    <Route  exact path="/" component={HOME}></Route>
                    <Route  path="/cart" component={CART}></Route>
                    <Route  path="/loginPage" component={LoginPage}></Route>
                    <Route  path="/logout" component={Logout}></Route>
                    <Route  path="/registerPage" component={RegisterPage}></Route>
                    <Route  path="/user" component={User}></Route>
                    <Route  path="/user-edit" component={UserEdit}></Route>
                    <Route  path="/success" component={Success}></Route>
                    <Route  path="/pay" component={checkout}></Route>
                    <Route  path="/contact" component={Contact}></Route>
                    <Route  path="/product-search" component={Search}></Route>
                    <Route  path="/category/:name/:id" component={category}></Route>
                    <Route  path="/product-detail/:id/:to_slug.html" component={ProductDetail}></Route>
                    <Route path="/bill-detail/:name/:id.html" component={BillDetail}></Route>
                    <Route path="/reset-password" component={Password}></Route>
                </Switch>
             </div>
        )
    }
}
export default routers;
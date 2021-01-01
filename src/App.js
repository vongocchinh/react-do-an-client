import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
// import Login from './container/user/login';
import './App.css';
import Routers from './router/routers';
import Header from './container/header/header';
import Menu from './components/../container/menuNav/menu';
import { ToastContainer } from 'react-toastify';
import Footer from './container/footer/footer';
class App extends Component {
    render() {
        return (
           <div>
               <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    style={{fontSize:"12px",borderRadius:"10px"}}
                    />
               
                <Router>
                <Header/>
                    <Menu/>
                        <Routers/>
                   <Footer/>
                </Router>
           </div>
        );
    }
}

export default App;
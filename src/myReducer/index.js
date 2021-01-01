import {combineReducers} from 'redux';
import Product from './product';
import Cart from './cart';
import CheckOut from './checkout';
import User from './user';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import LoginRequest from './login';
import RegisterRequest from './Register';
import Search from './search';
import Bill from './bill';
import UserOnline from './userOnline';
import MessageResetPassWord from './resetPasswrod';
import Newsletter from './newsletter';
import Contact from './contact';
import CountViewProduct from './countViewProduct';
import AddressBill from './addressBill';
const myReducer=combineReducers({
    getFirebase:firebaseReducer,
    getFirestore:firestoreReducer,
    Product,
    Cart,
    CheckOut,
    User,
    LoginRequest,
    RegisterRequest,
    Search,
    Bill,
    UserOnline,
    MessageResetPassWord,
    Newsletter,
    Contact,
    CountViewProduct,
    AddressBill
});
export default myReducer;
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home'
import DetailProduct from '../pages/detailProduct'
import CartList from '../pages/cartList'
import Transaction from '../pages/transaction'
// import Navbar from '../component/header'
import daftar from '../component/daftar'

export default class Routing extends Component {

    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/detailProduct/:id_product' component={DetailProduct} />
                <Route exact path='/cartList' component={CartList} />
                <Route exact path='/transaction/:id_cart' component={Transaction} />

                <Route path='/daftar' component={daftar} />
            </Router>
        )
    }
}
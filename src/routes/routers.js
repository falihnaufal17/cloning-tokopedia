import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home'
import DetailProduct from '../pages/detailProduct'


export default class Routing extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/detailProduct' component={DetailProduct} />
            </Router>
        )
    }
}
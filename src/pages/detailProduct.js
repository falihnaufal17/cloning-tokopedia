import React, { Component } from 'react'

import dummy from '../data/produk'

import Kaki from '../component/footer'
import Modal from '../component/modal'
export default class DetailProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: dummy,
            cart: [],
            qty: 0,
        }

        this.add = this.add.bind(this)
        this.substract = this.substract.bind(this)
    }

    add() {
        this.setState({
            qty: this.state.qty + 1,
        })
    }

    substract() {
        this.setState({
            qty: this.state.qty - 1
        })
    }

    addToCart() {
        this.state.cart.push({
            'qty': this.state.qty,
        })
        console.log("Add to cart success", this.state.cart)
    }

    render() {
        let getId = Number(this.props.match.params.id_product)
        let dataById = dummy.find((item => item.id_produk === getId))
        let harga = dataById.price * this.state.qty
        return (
            <div key={dataById.id_produk} style={{ marginTop: "100px" }}>

                <button disabled={this.state.qty < 1} onClick={this.substract}>-</button> Qty: {this.state.qty} <button onClick={this.add}>+</button>
                <br></br>

                <img src={dataById.image} alt=""></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} alt=""></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} alt=""></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} alt=""></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>

                <Kaki kota={dataById.location} nama={dataById.seller_name} harga={harga} click={this.addToCart.bind(this)} />
                <Modal gambar={dataById.image} />
            </div>
        )
    }
}
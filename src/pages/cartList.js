import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import dataCart from '../data/cart'
export default class CartList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: dataCart,
            qty: 2
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

    render() {
        console.log(this.state.qty)
        return (
            this.state.data.map((item) => {
                return (
                    <div class="container" style={{ marginTop: "100px" }}>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card shadow-sm" style={{ width: "100%" }}>
                                    <div class="card-body">
                                        <label style={{ float: 'left' }}><input type="checkbox" class="form-check-inline form-check-label" />Pilih semua produk</label>
                                        <p style={{
                                            float: 'right', fontWeight: 700,
                                            color: 'rgba(49,53,59,.44)'
                                        }} key={item.id_cart}>Hapus</p>
                                    </div>
                                    <div class="card" style={{ width: "100%" }}>
                                        <label class="checkbox">
                                            <h6>{item.product_name}<br></br>
                                                <span style={{ fontSize: "14px" }} class="font-weight-light text-secondary">{item.location}</span></h6>
                                            <input class="checkmark" type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <div class="row">
                                            <div class="col">
                                                <label class="checkbox">
                                                    <img src={item.image} style={{ width: "60px", height: "60px", float: "left" }} />
                                                    <h6 style={{ textTransform: "uppercase", float: "left", paddingLeft: "15px" }}>{item.product_name}</h6>
                                                    <br></br>
                                                    <p class="font-weight-bold" style={{ color: "#fa591d", float: "left", paddingLeft: "15px", fontSize: "14px" }}>Rp. {item.price}</p>
                                                    <input class="checkmark" type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="col-md-4">
                                                <div style={{
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "flex-end",
                                                }}>
                                                    <div style={{
                                                        marginRight: "25px",
                                                    }}>
                                                        <img src={"https://ecs7.tokopedia.net/img/cart-checkout/revamp-unify-1903/icon-wishlist-inactive.png"} style={{ width: "25px", height: "25px" }} />
                                                    </div>
                                                    <div style={{
                                                        marginRight: "25px"
                                                    }}>
                                                        <img src={"https://ecs7.tokopedia.net/img/cart-checkout/revamp-unify-1903/icon-trash.png"} style={{ width: "25px", height: "25px" }} />
                                                    </div>
                                                    <div>
                                                        <button
                                                            class="btn btn-sm"
                                                            style={{ backgroundColor: 'transparent', color: 'black' }}
                                                            disabled={this.state.qty < 2}
                                                            onClick={this.substract}>
                                                            <img src={"http://ecs7.tokopedia.net/img/cart-checkout/revamp-unify-1903/icon-min-active.png"} style={{ width: "25px", height: "25px" }} />
                                                        </button>
                                                        <input type="text" class="text-center" value={item.qty}
                                                            style={{
                                                                borderColor: 'transparent',
                                                                borderBottomWidth: 2,
                                                                borderBottomColor: 'green',
                                                                width: '30%'
                                                            }} onChange={(e) => this.setState({ qty: e.target.value })} />
                                                        <button
                                                            class="btn btn-sm"
                                                            style={{ backgroundColor: 'transparent', color: 'black' }}
                                                            onClick={this.add}>
                                                            <img src={"http://ecs7.tokopedia.net/img/cart-checkout/revamp-unify-1903/icon-plus-active.png"} style={{ width: "25px", height: "25px" }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p style={{ color: "#42b549", paddingLeft: "35px" }}>Tulis catatan untuk si penjual</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card shadow-sm" style={{ width: "100%", height: 'auto' }}>
                                    <div class="card-body">
                                        <h6 class="card-title">Ringkasan Belanja</h6>
                                        <hr></hr>
                                        <p class="card-text">Total Harga <span class="float-right font-weight-bold">RP. {item.sub_total}</span></p>
                                        <hr></hr>
                                        <button class="btn font-weight-bold mb-3" style={{ width: "100%", backgroundColor: '#ff5722', color: "white" }}>Beli (1)</button>

                                        <div class="card shadow-sm m-auto" style={{ height: "20%", width: "100%", borderRadius: "10px" }}>
                                            <div class="card-body p-3">
                                                <img src="https://ecs7.tokopedia.net/img/cart-checkout/promo-stacking/icon-promo-1.png" style={{ width: "25px", height: "25px", float: 'left' }} />
                                                <p class="card-text font-weight-bold float-left m-auto pl-2" style={{ color: "#03ac0e", fontSize: '12px' }}>Gunakan promo Tokopedia </p><span class="badge" style={{ backgroundColor: '#ff8b00', color: 'white', fontSize: '10px', float: 'right' }}>2 Kupon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}
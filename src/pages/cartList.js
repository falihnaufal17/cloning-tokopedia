import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import dataCart from '../data/cart'
import dataProduct from '../data/produk'
import Foot from '../component/footernew'

import {
    Container, Row, Col, Card, CardImg, CardText, CardSubtitle
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { Link } from 'react-router-dom'
export default class CartList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: dataCart,
            qty: 1,
            subTotal: 0,
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
        function text(text) {
            if (text.length > 50) {
                let textSplit = text.substr(0, 43)
                return `${textSplit} ...`
            } else {
                let textSplit = text
                return `${textSplit}`
            }
        }

        function Rupiah(nominal, prefix) {
            let number_string = nominal.toString(),
                split = number_string.split(','),
                sisa = split[0].length % 3,
                rupiah = split[0].substr(0, sisa),
                ribuan = split[0].substr(sisa).match(/\d{3}/gi);

            if (ribuan) {
                let separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
            return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
        }
        console.log(this.state.qty)
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card shadow-sm" style={{ width: "100%", height: "100%" }}>
                            <div class="card-body">
                                <label class="checkbox float-left">
                                    <span style={{ fontSize: '15px' }}>Pilih semua produk</span>
                                    <input type="checkbox" class="form-check-inline form-check-label checkmark" style={{ borderRadius: '10px' }} />
                                    <span class="checkmark"></span>
                                </label>
                                <Link to={'/'}>
                                    <p style={{
                                        float: 'right', fontWeight: 700,
                                        color: 'rgba(49,53,59,.44)'
                                    }}>Hapus</p>
                                </Link>
                                {this.state.data.map((item, key) => {
                                    return (
                                        <div class="card" style={{ width: "100%", height: "auto" }}>
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
                                                <div class="col-md-5">
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
                                                            <input type="text" class="text-center" value={this.state.qty}
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
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm" style={{ width: "100%", height: 'auto' }}>
                            <div class="card-body">
                                <h6 class="card-title">Ringkasan Belanja</h6>
                                <hr></hr>
                                <p class="card-text">Total Harga <span class="float-right font-weight-bold">Rp.</span></p>
                                <hr></hr>
                                <Link to={'/transaction'}><button class="btn font-weight-bold mb-3" style={{ width: "100%", backgroundColor: '#ff5722', color: "white" }}>Beli ({this.state.qty})</button></Link>
                                <Link to={'/'}>
                                    <div class="card shadow-sm m-auto" style={{ height: "20%", width: "100%", borderRadius: "10px" }}>
                                        <div class="card-body p-3">
                                            <img src="https://ecs7.tokopedia.net/img/cart-checkout/promo-stacking/icon-promo-1.png" style={{ width: "25px", height: "25px", float: 'left' }} />
                                            <p class="card-text font-weight-bold float-left m-auto pl-2" style={{ color: "#03ac0e", fontSize: '12px' }}>Gunakan promo Tokopedia </p><span class="badge" style={{ backgroundColor: '#ff8b00', color: 'white', fontSize: '10px', float: 'right' }}>2 Kupon</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-12">
                        <h6>Produk lainnya</h6>
                        <div className="productStyle">
                            {

                                dataProduct.map((product, key) => {
                                    return (

                                        <Card className="card">
                                            <Link to={`/detailProduct/${product.id_produk}`} key={key} style={{ textDecoration: 'none' }}>
                                                <CardImg className="ImgCard" top width="100%" src={product.image} alt="Card image cap" />
                                                <div className="bodyCard">
                                                    <CardSubtitle className="title">{text(product.product_name)}</CardSubtitle>
                                                    <CardSubtitle className="price">Rp {Rupiah(product.price)}</CardSubtitle>
                                                    <CardText > <small className="text-muted">{product.location}</small></CardText>
                                                    <div style={{ color: 'gold', marginTop: '-18px' }}>
                                                        <span class="fa fa-star adjuctStart"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                    </div>
                                                    <CardText hover={product.seller_name} />
                                                </div>
                                            </Link>
                                        </Card>
                                    )
                                })

                            }
                        </div>
                    </div>
                </div>

                <Foot />
            </div>
        )
    }
}
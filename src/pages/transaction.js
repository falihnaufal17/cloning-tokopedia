import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container, Row, Col, Input
} from 'reactstrap';
import dataCart from '../data/cart';
import '../css/navbar.css';

export default class Transaction extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: dataCart
        }

    }

    render() {
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
        let getId = Number(this.props.match.params.id_cart)
        let dataById = this.state.data.find((item => item.id_cart === getId))
        return (
            <div>
                <div style={{ backgroundColor: '#ededed', height: '60px', color: '#606060', borderBottom: "1px solid rgba(0,0,0,0.2)", margin: '-30px -30px' }}>
                    <Link to={`/`}>
                        <img style={{ marginTop: '12px', marginLeft: '25px' }} class="logo" src="https://ecs7.tokopedia.net/microsite-production/brand-asset/dlc/logo/hires-tokopedia-logo.png" alt="Italian Trulli" />
                    </Link>
                </div>

                <Container style={{ marginTop: '75px' }}>
                    <Row>
                        <Col md="12">
                            <Row>
                                <Col md="8">
                                    <h5><b>Checkout</b></h5>
                                    <h6><b>Alamat Pengiriman</b></h6>
                                    <hr />
                                    <h6><b>{dataById.nama_penerima}</b> (Alamat Rumah)</h6>
                                    <h6>{dataById.no_hp}</h6>
                                    <h6>{dataById.alamat_rumah}</h6>
                                    <h6>{dataById.kota}, {dataById.negara}</h6>
                                    <ul style={{ color: '#42b549', display: 'flex', listStyleType: 'none', marginLeft: '-65px', marginTop: '10px', fontSize: '14px' }}>
                                        <li>
                                            <a style={{ fontWeight: '600' }}>Ubah Alamat</a>
                                        </li>
                                        <div style={{ borderRight: '1px solid #ddd', marginLeft: '30px' }} />
                                        <li>
                                            <b style={{ fontWeight: '600' }}>Ubah Pinpoint</b>
                                        </li>
                                    </ul>
                                    <hr />
                                    <ul style={{ listStyleType: 'none', display: 'flex', marginLeft: '-40px' }}>
                                        <li style={{ border: '1px solid #dadada', padding: '10px 10px', borderRadius: '5px', height: '40px', fontWeight: '500', color: '#aaa', marginRight: '20px' }}>
                                            <p>Kirim ke Berapa Alamat</p>
                                        </li>
                                        <li style={{ border: '1px solid #dadada', padding: '10px 10px', borderRadius: '5px', height: '40px', fontWeight: '500', color: '#aaa', marginRight: '20px' }}>
                                            <p>Gunakan Alamat Batu</p>
                                        </li>
                                        <li style={{ border: '1px solid #dadada', padding: '10px 10px', borderRadius: '5px', height: '40px', fontWeight: '500', color: '#aaa' }}>
                                            <p>Pilih Alamat Lain</p>
                                        </li>
                                    </ul>
                                    <hr style={{ borderBottom: '2.5px solid rgba(0,0,0,0.1)' }} />
                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }} >{dataById.seller_name}<br />
                                        <span class="font-weight-light text-secondary">{dataById.location}</span></h6>
                                    <div>
                                        <div style={{ width: '50%', float: 'left' }}>
                                            <img src={dataById.image} style={{ width: "60px", float: "left", paddingRight: '10px' }} />
                                            <h6 style={{ textTransform: "uppercase", float: "inherit", width: '300px', fontSize: '14px', fontWeight: 'bold' }}>{dataById.product_name}</h6>
                                            <p class="font-weight-bold" style={{ color: "#fa591d", float: "inherit", marginTop: '-10px', fontSize: "14px" }}>Rp. {Rupiah(dataById.price)}</p>
                                        </div>
                                        <div style={{ width: '50%', float: 'right', display: 'block' }}>
                                            <h6 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Pilih Durasi</h6>
                                            <Input type="select" style={{ width: '300px', height: '35px', marginTop: '-10px', fontSize: '13px' }} >
                                                <option>JNE REG</option>
                                                <option>J&T Express</option>
                                            </Input>
                                        </div>
                                    </div>
                                    <hr style={{ float: 'none', marginTop: '100px' }} />

                                    <h6 style={{ float: "left" }}>Sub Total</h6>
                                    <h6 style={{ float: "right" }}>Rp. {Rupiah(dataById.sub_total)}</h6>
                                </Col>
                                <Col md="4">

                                    <div class="card shadow-sm" style={{ width: "100%", height: 'auto' }}>
                                        <div class="card-body">
                                            <h6 class="card-title">Ringkasan Belanja</h6>
                                            <hr></hr>
                                            <p class="card-text">Total Harga <span class="float-right font-weight-bold">{Rupiah(dataById.sub_total)}</span></p>
                                            <hr></hr>
                                            <p class="card-text">Total Tagihan<span class="float-right font-weight-bold">-</span></p>
                                            <Link to={'/transaction'}><button class="btn font-weight-bold mb-3" style={{ width: "100%", backgroundColor: '#ff5722', color: "white" }}>Pilih Pembayaran</button></Link>
                                            <Link to={'/'}>
                                                <div class="card shadow-sm m-auto" style={{ height: "20%", width: "100%", borderRadius: "10px" }}>
                                                    <div class="card-body p-3">
                                                        <img src="https://ecs7.tokopedia.net/img/cart-checkout/promo-stacking/icon-promo-1.png" style={{ width: "25px", height: "25px", float: 'left' }} />
                                                        <p class="card-text font-weight-bold float-left m-auto pl-2" style={{ color: "#03ac0e", fontSize: '12px' }}>Gunakan promo Tokopedia </p><span class="badge" style={{ backgroundColor: '#ff8b00', color: 'white', fontSize: '10px', float: 'right' }}>99... Kupon</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div >
        )
    }
}
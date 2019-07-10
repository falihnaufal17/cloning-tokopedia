import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
export default class CartList extends Component {
    render() {
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
                                }}>Hapus</p>
                            </div>
                            <div class="card" style={{ width: "100%" }}>
                                <h5 class="card-title">Product Name</h5>
                                <label class="checkbox">apa wes
                                    <input class="checkmark" type="checkbox" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="checkbox">apa wes
                                    <input class="checkmark" type="checkbox" />
                                    <span class="checkmark"></span>
                                </label>
                                <p>Location</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm" style={{ width: "100%", height: 'auto' }}>
                            <div class="card-body">
                                <h6 class="card-title">Ringkasan Belanja</h6>
                                <hr></hr>
                                <p class="card-text">Total Harga <span class="float-right font-weight-bold">RP. 23.000</span></p>
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
    }
}
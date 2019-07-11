import React, { Component } from 'react'
import '../css/navbar.css';
import dummy from '../data/produk'
import Kaki from '../component/footer'
import Sikil from '../component/FooterBar'
import Modal from '../component/modal'
import Ndas from '../component/header'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class DetailProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: dummy,
            cart: [],
            qty: 1,
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
    
    angkaRP=(angka) => {
        var rupiah = '';		
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
      };

    addToCart() {
        this.state.cart.push({
            'qty': this.state.qty,
        })
        console.log("Add to cart success", this.state.cart)
    }
     rupiah(angka)
    {
	var rupiah = '';		
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }

    render() {
        let getId = Number(this.props.match.params.id_product)
        let dataById = dummy.find((item => item.id_produk === getId))
        let subTotal = dataById.price * this.state.qty
        const flexContainer = {
            display: "flex",
            flexWrap: "wrap",
        }

        const flexContent = {
            width: "20%",
            alignItems: "center",
            padding: "10px 0",
            float: "left",
            display: "flex",
            boxSizing: "border-box"
        }

        const inlineBlock = {
            display: "inline-block",
            verticalAlign: "middle"
        }

        const itemContent = {
            fontSize: "11px",
            color: "s",
            lineHeight: 1,
        }

        const itemValue = {
            fontWeight: "600",
            fontSize: "14px",
            color: "rgba(0,0,0,.7)",
            lineHeight: "12px",
            paddingTop: 5
        }

        return (
            <div>
            <Ndas/>
            <div class="container">
                <div key={dataById.id_produk} style={{ marginTop: "100px" }}>
                    <nav aria-label="breadcrumb" style={{ fontSize: '15px' }}>
                        <ol class="breadcrumb bg-transparent">
                            <li class="breadcrumb-item"><a href="#">Beranda</a></li>
                            <li class="breadcrumb-item"><a href="#">Kategori</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={dataById.image} alt="" class="img-thumbnail" style={{ width: '380px', height: '380px' }}></img>
                        </div>
                        <div class="col-lg-6">
                            <h3 class=" font-weight-bolder">{dataById.product_name}</h3>
                            <span>46 Ulasan</span><br></br>
                            <div class="mt-2">
                                <span>99.21%  Transaksi Sukses Dari  126  Transaksi </span>
                                <button
                                    class="btn btn-light btn-sm"
                                    style={{ float: "right", backgroundColor: 'transparent', color: 'black', borderWidth: '2px' }} ><i class=" fa fa-share-alt fa-1x"></i>  Bagikan</button>
                            </div>
                            <h4 class=" font-weight-bolder mt-2" style={{ color: "#ff5722" }}> {this.rupiah(dataById.price)}</h4>
                            <div class="mt-3">
                                <div style={{ float: "left" }}>
                                    <h6 class=" font-weight-bolder">Jumlah</h6>
                                    <button
                                        class="btn btn-sm"
                                        style={{ backgroundColor: 'transparent', color: 'black' }}
                                        disabled={this.state.qty < 2}
                                        onClick={this.substract}>
                                        <img src={"http://ecs7.tokopedia.net/img/cart-checkout/revamp-unify-1903/icon-min-active.png"} style={{ width: "25px", height: "25px" }} />
                                    </button>
                                    <input type="text" class="text-center" value={this.state.qty} style={{
                                        borderColor: 'transparent',
                                        borderBottomWidth: 2,
                                        borderBottomColor: 'green',
                                        width: '15%'
                                    }} />
                                    <button
                                        class="btn btn-sm"
                                        style={{ backgroundColor: 'transparent', color: 'black' }}
                                        onClick={this.add}>
                                        <img src={"http://ecs7.tokopedia.net/img/cart-checkout/revamp-unify-1903/icon-plus-active.png"} style={{ width: "25px", height: "25px" }} />
                                    </button>
                                </div>
                                <div style={{ float: "right" }}>
                                    <h6 class=" font-weight-bolder">Catatan untuk penjual (opsional)</h6>
                                    <input type="text" class="form-control" placeholder="Contoh: Warna Putih, Ukuran XL,Edisi Ke" />
                                    <span class="text-secondary" style={{ float: 'right', fontSize: '13px' }}>0/144 karakter</span>
                                </div>
                            </div>

                            <div style={{ float: 'left' }}>
                                <p>Cicilan bunga 0% mulai dari Rp 2.959  <span class="text-danger font-weight-bold">Bandingkan Cicilan</span></p>
                                <div style={flexContainer}>
                                    <div style={flexContent}>
                                        <i class="fa fa-eye mr-1"></i>
                                        <div style={inlineBlock}>
                                            <div style={itemContent}>Dilihat</div>
                                            <div style={itemValue}>3</div>
                                        </div>
                                    </div>
                                    <div style={flexContent}>
                                        <i class="fa fa-truck mr-1"></i>
                                        <div style={inlineBlock}>
                                            <div style={itemContent}>Terkirim</div>
                                            <div style={itemValue}>0</div>
                                        </div>
                                    </div>
                                    <div style={flexContent}>
                                        <i class="fa fa-box-open mr-1"></i>
                                        <div style={inlineBlock}>
                                            <div style={itemContent}>Kondisi</div>
                                            <div style={itemValue}>Baru</div>
                                        </div>
                                    </div>
                                    <div style={flexContent}>
                                        <i class="fa fa-tag mr-1"></i>
                                        <div style={inlineBlock}>
                                            <div style={itemContent}>Min. Beli</div>
                                            <div style={itemValue}>1</div>
                                        </div>
                                    </div>
                                    <div style={flexContent}>
                                        <i class="fa fa-shield-alt mr-1"></i>
                                        <div style={inlineBlock}>
                                            <div style={itemContent}>Asuransi</div>
                                            <div style={itemValue}>Opsional</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="float-left mt-3">
                                <h6>Estimasi ongkos kirim</h6>

                                <div class="row rounded text-secondary">
                                    <div class="col border p-3">
                                        <p style={{ fontSize: "12px" }}>Kecamatan</p>
                                    </div>
                                    <div class="col border">
                                        <p style={{ fontSize: "12px" }}>Kode Pos</p>
                                    </div>
                                    <div class="col border disabled">
                                        <p style={{ fontSize: "12px" }}>Berat</p>
                                    </div>
                                    <div class="col text-center text-danger">
                                        <p style={{ padding: 20, paddingLeft: 5, cursor: 'pointer' }}>Hitung</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1 ">
                                <img src="https://a.imge.to/2019/07/10/TDVm1.png"></img>

                        </div>
                    </div>
                </div>
                
                <Kaki kota={dataById.location} nama={dataById.seller_name} gambar={dataById.seller_foto} subTotal={this.rupiah(subTotal)} click={this.addToCart.bind(this)} />
                <Modal gambar={dataById.image} qty={this.state.qty} subTotal={subTotal} hargaAwal={dataById.price} />
                                   
            </div>
            <Sikil/>
            </div>
            
        )
    }
}
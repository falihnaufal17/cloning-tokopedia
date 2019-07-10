import React, { Component } from 'react'
import dummy from '../data/produk'
import Navbar from '../component/header'
import Kaki from '../component/footer'
import Modal from '../component/modal'
import FooterBar from '../component/FooterBar';
import '../css/potoGoyang.css'

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

    render() {
        let getId = Number(this.props.match.params.id_product)
        let dataById = dummy.find((item => item.id_produk === getId))
        let     subTotal = dataById.price * this.state.qty
        
        // let prop = {background-image: url(&quot;{dataById.image}&quot;); padding-bottom: 56.25%; background-position: center center; background-size: cover;}
        return (
            <div>
                <Navbar />
                
                    <div class="container" style={{ marginTop: "100px" }}>
                    <div key={dataById.id_produk} >
                        <div class="row">
                            <div class="col-md-3 mt-12 ">
                                     
                                    
                                    
                                            {/* <div class="image-container">
                                                <div class="image detail-view" style={{backgroundImage: `url(&quot;${dataById.image}&quot;)`, paddingBottom: "56.25%", backgroundPosition: "center center", backgroundSize: "cover"}}></div>
                                            </div> */}
                                    <img style={{width:"300px"}} src={dataById.image} class="card-img-top" alt=""></img>
                            </div>
                            <div class="col-md-6 ">
                                <h2>{dataById.product_name}</h2>
                                <hr></hr>
                                <p></p>
                                <h3>{this.angkaRP(dataById.price)}</h3>
                                <a href="https://mdbootstrap.com/" class="btn btn-indigo">BELI SEKARANG!</a>
                                <p>SENEN HARGA NAIK</p>
                                <button disabled={this.state.qty < 1} onClick={this.substract}>-</button> Qty: {this.state.qty} <button onClick={this.add}>+</button>
                                <br></br>
                            </div>
                            <div class="col-md-3 float-righ">
                                <img src="https://a.imge.to/2019/07/10/TDVm1.png"></img>

                            </div>
                        </div>
                        <Kaki kota={dataById.location} nama={dataById.seller_name} gambar={dataById.seller_foto} subTotal={this.angkaRP(subTotal)} click={this.addToCart.bind(this)} />
                        <Modal gambar={dataById.image} ukuran={"modal-dialog modal-sm"} qty={this.state.qty} subTotal={subTotal} hargaAwal={dataById.price} />  
                        
                    </div>
                    
            </div>
            <FooterBar/>
            </div>
        )
    }
}
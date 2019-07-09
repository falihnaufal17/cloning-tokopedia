import React, { Component } from 'react'

import dummy from '../data/produk'

import Kaki from '../component/footer'
import Modal from '../component/modal'
export default class DetailProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: dummy
        }
    }
    render() {
        let getId = Number(this.props.match.params.id_product)
        let dataById = dummy.find((item => item.id_produk === getId))
        return (
            <div>
            <div style={{marginTop:"100px"}}>
                
                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
                <img src={dataById.image} ></img>
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
            </div>
            <Kaki kota={dataById.location} nama={dataById.seller_name} harga={dataById.price} />
            <Modal gambar={dataById.image}/>
            </div>
        )
    }
}
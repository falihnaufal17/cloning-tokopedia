import React, { Component } from 'react'

import dummy from '../data/produk'
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
                <h1>{dataById.id_produk}. {dataById.product_name}</h1>
            </div>
        )
    }
}
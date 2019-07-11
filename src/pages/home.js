//libray
import React, { Component } from 'react'
import {
    Container, Row, Col, Card, CardImg, CardText, CardSubtitle
} from 'reactstrap';

import { Link } from 'react-router-dom'
//Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

//data
import Promo from './home/promo'
import Category from './home/category'
import Navbar from '../component/header'
import Foot from '../component/footernew'
import Dummy from '../data/produk'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            data: Dummy,
        }
    }

    render() {
        function text(text) {
            if (text.length > 34) {
                let textSplit = text.substr(0, 30)
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

        return (
            <div>
                <Navbar />
                <Container >
                    <div style={{ marginTop: "100px" }}>
                        <section>
                            <Promo />
                        </section>
                    </div>
                    <section>
                        <Category />
                    </section>

                    <section>

                        <Row>
                            <Col md={12} >
                                <div className="productStyle">
                                    {

                                        this.state.data.map((product, key) => {
                                            return (

                                                <Card className="card">
                                                    <Link to={`/detailProduct/${product.id_produk}`} key={key} style={{ textDecoration: 'none' }}>
                                                        <CardImg className="ImgCard" top width="100%" src={product.image} alt="Card image cap" />
                                                        <div className="bodyCard">
                                                            <CardSubtitle className="title">{text(product.product_name)}</CardSubtitle>
                                                            <CardSubtitle className="price">Rp.{Rupiah(product.price)}</CardSubtitle>
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
                            </Col>
                        </Row>
                    </section>
                </Container>
                <Foot />

            </div>

        )
    }
}

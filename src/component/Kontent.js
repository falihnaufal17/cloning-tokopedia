//libray
import React, { Component } from 'react'
import {
    Container, Row, Col, Card, Button, CardImg, CardText,
    CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom'

//Css
import 'bootstrap/dist/css/bootstrap.min.css';

//data
import Dummy from '../data/produk'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            data: Dummy,
        }
    }

    restart() {
        window.scrollTo(0, 0)
    }
    render() {
        function text(text) {
            if (text.length > 36) {
                let textSplit = text.substr(0, 36)
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
                <Container >
                    <Row>
                        <Col md={12} >
                            <div className="productStyle">
                                {

                                    this.state.data.map((product, key) => {
                                        return (
                                            <Card className="card" style={{ marginTop: "33px" }}>
                                                <Link to={`/detailProduct/${product.id_produk}`} key={key} style={{ textDecoration: 'none' }} onClick={this.restart}>
                                                    <CardImg className="ImgCard" top width="999%" src={product.image} alt="Card image cap" />
                                                    <div className="bodyCard">
                                                        <CardSubtitle className="title">{text(product.product_name)}</CardSubtitle>
                                                        <CardSubtitle className="price">Rp.{Rupiah(product.price)}</CardSubtitle>
                                                        <CardText > <small className="text-muted">{product.location}</small></CardText>
                                                        <CardText hover={product.seller_name} />
                                                        <Button outline color="warning" size="sm">Tambah Kekeranjang</Button>{' '}                                                    </div>
                                                </Link>
                                            </Card>
                                        )
                                    })

                                }
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

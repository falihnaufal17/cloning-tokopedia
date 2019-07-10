//libray
import React, { Component } from 'react'
import {
    Container, Row, Col, Card, CardImg, CardText, CardSubtitle
} from 'reactstrap';

//Css
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

//data
import Promo from './promo'
import Category from './category'
import Dummy from '../../data/produk'

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
            if (text.length > 25) {
                let textSplit = text.substr(0, 50)
                return `${textSplit} ...`
            } else {
                let textSplit = text
                return `${textSplit}`
            }
        }

        return (
            <div>
                <Container style={{ marginLeft: '10px', marginRight: '10px' }}>
                    {/* PROMOSI */}
                    <section>
                        <Promo />
                    </section>

                    <section>
                        <Category />
                    </section>

                    <section>
                        <Row>
                            <Col>
                                <div className="productStyle">
                                    {

                                        this.state.data.map((product, key) => {
                                            return (

                                                <Card className="card">
                                                    <CardImg className="ImgCard" top width="100%" src={product.image} alt="Card image cap" />
                                                    <div className="bodyCard">
                                                        <CardSubtitle className="title">{text(product.product_name)}</CardSubtitle>
                                                        <CardSubtitle className="price">Rp {product.price}</CardSubtitle>
                                                        <CardText > <small className="text-muted">{product.location}</small></CardText>
                                                        <CardText hover={product.seller_name} />
                                                    </div>
                                                </Card>
                                            )
                                        })

                                    }
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>

            </div>
        )
    }
}

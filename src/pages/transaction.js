import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container, Row, Col
} from 'reactstrap';
import '../css/navbar.css';

export default class Transaction extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#ededed', margin: "28px 30px", height: '50px', marginTop: "-28px", boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)', width: "100%" }}>
                    <Link to={`/`}>
                        <img class="logo" src="https://ecs7.tokopedia.net/microsite-production/brand-asset/dlc/logo/hires-tokopedia-logo.png" alt="Italian Trulli" />
                    </Link>
                </div>

                <Container>
                    <Row>
                        <Col md="12">
                            <Row>
                                <Col md="8">
                                    <h3>Hello gaes</h3>
                                </Col>
                                <Col md="4">
                                    <h3>Hello gaes</h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container, Row, Col, Card, CardImg, CardText, CardSubtitle
} from 'reactstrap';
import '../css/navbar.css';

export default class Transaction extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#ededed', height: '50px', paddingTop: '10px', paddingLeft: '15px', boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)' }}>
                    <Link to={`/`}>
                        <img class="logo" src="https://ecs7.tokopedia.net/microsite-production/brand-asset/dlc/logo/hires-tokopedia-logo.png" alt="Italian Trulli" />
                    </Link>
                </div>

                <Container>

                </Container>

            </div>
        )
    }
}
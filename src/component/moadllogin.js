import React from 'react';
import data from '../data/kategori.js'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

import '../css/navbar.css';
// import {Link} from 'react-router-dom';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            datas: data
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <div id="login" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-md-6">

                        <div class="modal-content">

                            <div class="modal-body">
                                <div style={{ padding: '2em' }}>
                                    <h4 style={{ float: 'left' }}>Masuk</h4>
                                    <h6 style={{ float: 'right' }}>Daftar</h6>
                                    <label style={{ marginLeft: '-70px', marginTop: '70px', fontWeight: '300', fontSize: '14px' }}>Nomor ponsel atau Email</label>
                                    <Input />
                                    <label style={{ marginTop: '10px', fontWeight: '300', fontSize: '14px' }}>Password</label>
                                    <Input />
                                    <Button style={{ marginTop: '30px', width: '100%', borderRadius: '10px', }} color="success" size="lg">Login</Button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}



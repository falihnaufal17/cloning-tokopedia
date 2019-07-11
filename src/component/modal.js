import React from 'react';
import data from '../data/kategori.js'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

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

        <div id="myModal" class="modal fade" role="dialog">
          <div class={this.props.ukuran}>

            <div class="modal-content">

              <div class="modal-body">

                <img src={this.props.gambar} ></img>
                <h6>Rp. {this.props.hargaAwal}</h6>
                <p>Qty: {this.props.qty}</p>
                <p>Rp. {this.props.subTotal}</p>


              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }
}



import React from 'react';
import data from '../data/kategori.js'
import { Link } from 'react-router-dom'

import '../css/navbar.css';

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
    const content = {
      display: "flex",
      textAlign: "left",
      alignItems: "flex-start",
      alignSelf: "flex-start",
    }

    const contentText = {
      padding: "0 16px",
      color: "rgba(0,0,0,.54)",
      fontSize: "14px",
      maxWidth: "335px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }

    const contentAction = {
      marginLeft: "auto",
    }

    return (
      <div>
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="text-center">Berhasil Ditambahkan</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <div class="card shadow-sm m-auto" style={{ width: "100%", height: "auto" }}>
                  <div class="card-body">
                    <div style={content}>
                      <img src={this.props.gambar} class="img-thumbnail" style={{ maxWidth: "60px" }} />
                      <div style={contentText}>
                        {this.props.productName}
                      </div>
                      <div style={contentAction}>
                        <Link to={'/cartList'}>
                          <button class="btn" onClick={() => this.setState({ isOpen: false })} style={{ backgroundColor: "#42b549", color: "white", border: "1px solid #42b549" }} data-dismiss="modal">Lihat Keranjang</button> {/* pake data-dismiss bisa tpi gak pindah */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



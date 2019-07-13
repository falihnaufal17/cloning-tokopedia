import React from 'react';
import data from '../data/kategori.js'
import dataCart from '../data/cart'

import '../css/navbar.css';
import '../css/index.css'
import { Link } from 'react-router-dom';
import Modal from './modalLogin';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      datas: data,
      dataCart: dataCart
    };
  }
  restart() {
    window.scrollTo(0, 0)
  }

  sumCart() {
    return this.state.dataCart.length
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div style={{ marginBottom: "-70px" }}>
        <div class="fixed-top" style={{ backgroundColor: 'white' }}>
          <div style={{ width: '100%', justifyContent: 'center' }}>
            <a href="https://www.tokopedia.com/mobile-apps/"><p className="headerTopLeft">Download Tokopedia App</p></a>
            <ul className="headerTopRight">
              <li>Mitra Tokopedia</li>
              <li>Mulai Berjualan</li>
              <li>Promo</li>
              <li>Pusat bantuan</li>
            </ul>
          </div>

          <nav class="navbar navbar-expand-sm" style={{ justifyContent: 'center' }} >


            <Link to={`/`}>
              <img class="logo" src="https://ecs7.tokopedia.net/microsite-production/brand-asset/dlc/logo/hires-tokopedia-logo.png" alt="Italian Trulli" />
            </Link>


            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle navlinkCat" href="#" id="navbardrop" data-toggle="dropdown">
                  kategori
              </a>
                <div class="dropdown-menu">
                  {this.state.datas.map((item) => {
                    return <a class="dropdown-item" href="#">{item.nama_kategori}</a>
                  })}
                </div>
              </li>
            </ul>
            <form class="form-inline" onSubmit={this.handleSubmit}>
              <div class="input-group">

                <input class="form-control mr-sm-9" style={{ height: '35px', width: '700px', marginTop: '2px', fontSize: '12px', borderRight: 'none' }} type="text" placeholder="Cari produk atau toko" />
                <button style={{ height: '35px', width: '40px', marginTop: '2px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', marginRight: '30px', borderLeft: 'none' }} class="input-group-text" ><i style={{ color: 'grey' }} class="fas fa-search"></i></button>
                <div class="input-group-prepend">
                  <div class="float-right">
                  </div>
                  <Link to={'/cartList'} onClick={this.restart}>
                    <i style={{ marginTop: '12px', color: '#AAA' }} class="fas fa-shopping-cart"><span class="badge badge-danger">{this.sumCart()}</span></i>
                  </Link>
                  <div style={{ marginLeft: '40px', borderRight: '1px solid  rgb(185, 185, 185)', marginTop: '10px', height: '20px' }}></div>
                  <div class="float-right">

                    <ul class="navbar-nav float-right">
                      <li class="nav-item" >
                        <a class="nav-link" style={{ color: 'grey' }} data-toggle="modal" data-target="#elegantModalForm">Masuk</a>
                      </li>
                      <li class="nav-item">
                        <Link to={"/daftar"} Component={"component"}> <button type="button" class="btn btn-outline-success">Daftar</button></Link>
                      </li>
                    </ul>

                  </div>

                </div>
              </div>
            </form>
          </nav>
        </div>
        <div>
          <Modal />
        </div>
      </div >


    );
  }
}

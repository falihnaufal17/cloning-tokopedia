import React from 'react';
import data from '../data/kategori.js'

import '../css/navbar.css';
import './index.css'
import { Link } from 'react-router-dom';
import Trolli from '../assets/trolli.png';
import Modal from '../component/moadllogin';

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
        <div class="fixed-top" style={{ backgroundColor: 'white' }}>
          <section style={{ width: '100%' }}>
            <a href="https://www.tokopedia.com/mobile-apps/"><p className="headerTopLeft">Download Tokopedia App</p></a>
            <ul className="headerTopRight">
              <li>Mitra Tokopedia</li>
              <li>Mulai Berjualan</li>
              <li>Promo</li>
              <li>Pusat bantuan</li>
            </ul>
          </section>

          <nav class="navbar navbar-expand-sm" style={{ verticalAlign: 'middle' }} >
            {/* src="https://a.imge.to/2019/07/09/TdHXH.jpg" */}
            {/* http://1.bp.blogspot.com/-MYObb95pjRg/VpDg7UwhuFI/AAAAAAAABWw/ZO41qWK-Jgg/s1600/Logo-Tokopedia.jpg */}

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
                <button style={{ height: '35px', width: '40px', marginTop: '2px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', marginRight: '30px', borderLeft: 'none' }} class="input-group-text" ><i class="fas fa-search"></i></button>
                <div class="input-group-prepend">
                  <div class="float-right">
                  </div>
                  <a href="#">
                    <img className="trolli" src={Trolli} />
                  </a>
                  <div style={{ marginLeft: '40px', borderRight: '1px solid  rgb(185, 185, 185)', marginTop: '10px', height: '20px' }}></div>
                  <div class="float-right">

                    <ul class="navbar-nav float-right">
                      <li class="nav-item" >
                        <a class="nav-link" style={{ color: 'grey' }} href="#" data-toggle="modal" data-target="#login">Login</a>
                      </li>
                      <li class="nav-item">
                        <button type="button" class="btn btn-outline-success">Sign Up</button>
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
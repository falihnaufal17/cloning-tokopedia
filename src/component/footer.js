import React from 'react';
import dummy from '../data/produk';

import '../css/navbar.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      datas: dummy
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // let getId = Number(this.props.match.params.id_product)
    //     let dataById = dummy.find((item => item.id_produk === getId))
    return (
      <div>

        <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-bottom" >
            <a class="navbar-brand" href="javascript:void(0)">
              <img class="fotofooter img-rounded"  src={this.props.gambar} alt="Italian Trulli" /></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
              <span class="navbar-toggler-icon"></span>
            </button>
          

          <div class="collapse navbar-collapse" id="navb">
            <ul class="navbar-nav mr-auto">

              <div class="pdp-shop__info">
                <div class="pdp-shop__info__name-wrapper">
                  <i title="Power Merchant" class="pdp-shop__info__badge image-power-merchant"></i>
                  <a href="https://www.tokopedia.com/luxvory">
                    <span id="shop-name-info" class="shop-name pdp-shop__info__name" itemprop="name">{this.props.nama}</span>
                  </a>
                  <img id="shop-reputation-badge-3883970" src="https://ecs7.tokopedia.net/img/repsys/silver-2.gif" class="pdp-shop__info__reputation" data-original-title="833 points" data-toggle="tooltip" data-placement="top" title=""></img>
                </div>
                <p class="pdp-shop__info__stats" title="Kota Tangerang • Kota Tangerang • Dibalas ± 1 menit">
                  <span itemprop="addressLocality">{this.props.kota}</span>&nbsp;•
                          <span>Online Hari ini</span>&nbsp;
                          <span id="footer-shop-response">• Dibalas ± 1 menit</span>
                </p>
              </div>
              <div class="form-inline my-2 ml-5 my-lg-0">
                <button type="button" class=" btn btn-success btn-" data-toggle="modal" data-target="#myModal">
                  follow
                </button>
              </div>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <ul class="navbar-nav float-right">
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)"> {this.props.subTotal}</a>
                </li>

              </ul>
              <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#myModal" style={{ marginRight: 20 }}>
                beli
                </button>

              <button type="button" onClick={this.props.click} class="btn btn-warning" data-toggle="modal" data-target="#myModal">
                tambah kekeranjang
                </button>
            </form>
          </div>
        </nav>

      </div>
    );
  }
}
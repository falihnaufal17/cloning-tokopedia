//libray
import React, { Component } from 'react'

import '../css/tab.css';
//Css
import 'bootstrap/dist/css/bootstrap.min.css';

import Dummy from '../data/produk'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      data: Dummy,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {


    return (
      <div>
        <div class="tabset">

          <input type="radio" name="tabset" id="tab1" aria-controls="marzen"></input>
          <label style={{ width: '190px', fontWeight: '500' }} for="tab1"><i class="fas fa-list-ul"></i> Informasi Produk</label>

          <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"></input>
          <label style={{ width: '170px', fontWeight: '500' }} for="tab2"><i class="fas fa-star"></i> Ulasan</label>

          <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"></input>
          <label style={{ width: '170px', fontWeight: '500' }} for="tab3"> <i class="far fa-comments"></i> Diskusi Produk</label>
          <hr style={{ width: '100%', borderBottom: '1.2px solid rgba(0, 0, 0, 0.1)', marginTop: '-20px', marginLeft: '14px' }} />
          <div class="tab-panels mt-3">
            <section id="marzen" class="tab-panel" style={{ marginLeft: '13px' }}>
              <h2 style={{ marginTop: '-20px' }}>{this.props.barang}</h2>
              <p>{this.props.desc}</p>
              
            </section>
            <section  id="rauchbier" class="tab-panel" style={{ marginLeft: '11px',width:"5000px",height:"9900px" }}>
              <h2 style={{ marginTop: '-20px' }}>Komentar Pedas</h2>

              <div style={{ marginBottom:'-170px' }} class="card">
                <div style={{ width:'-170px' }}class="card-header">Bapak suprapto
                  <div style={{ color: 'gold' }}>
                    <span class="fa fa-star adjuctStart"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </div>
                <h6 class="card-body">barang ini sangat bagus</h6> 
              </div>
              <div style={{ marginBottom:'-170px' }} class="card">
                <div class="card-header">Ibu altynbenkova
                <div style={{ color: 'gold' }}>
                    <span class="fa fa-star adjuctStart"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    
                  </div>
                </div>
                <div class="card-body">barang ini sangat biasa saja</div> 
              </div>
              <div style={{ marginBottom: '-170px' }} class="card">
                <div class="card-header">Tante mia
                <div style={{ color: 'gold' }}>
                    <span class="fa fa-star adjuctStart"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    
                  </div>
                </div>
                <div class="card-body">barang ini sangat oke</div> 
              </div>
              <div style={{ marginBottom: '-170px' }} class="card">
                <div class="card-header">Paman Sam
                <div style={{ color: 'gold' }}>
                    <span class="fa fa-star adjuctStart"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </div>
                <div class="card-body">barang ini sangat Suram</div> 
              </div>
              
              
            </section>
            <section id="dunkles" class="tab-panel" style={{ marginLeft: '13px' }}>
            
              <h2 style={{ marginTop: '-20px' }}> Diskusi Produk</h2>
                <div class="row border">
                <i class="far fa-question-circle">Ada pertanyaan ? Diskusikan dengan penjual atau pengguna lain</i>         
                         <p></p>
                  <button style={{marginLeft:"30%"}} type="button" class="btn btn-outline-success">Tulis Pertanyaan</button>   
                </div>
            </section>
          </div>

        </div>
      </div>

    )
  }
}

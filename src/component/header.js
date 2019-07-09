import React from 'react';
import data from '../data/kategori.js'

import '../css/navbar.css';
import {Link} from 'react-router-dom';
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
        <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top">
        {/* src="https://a.imge.to/2019/07/09/TdHXH.jpg" */}
        {/* http://1.bp.blogspot.com/-MYObb95pjRg/VpDg7UwhuFI/AAAAAAAABWw/ZO41qWK-Jgg/s1600/Logo-Tokopedia.jpg */}
        
        <Link to={`/`}>
           <img class="logo" src="https://a.imge.to/2019/07/09/TdHXH.jpg" alt="Italian Trulli" />
        </Link>
          

          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
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

              <input class="form-control mr-sm-9" size="70" type="text" placeholder="Search" />
              <div class="input-group-prepend">
                <span class="input-group-text" ><i class="fas fa-search"></i></span>
                <div class="float-right">
                  
                </div>
                <button>
                  <i class="fas fa-shopping-cart"></i>
                </button>
                <div class="float-right">
                 
                    <ul class="navbar-nav float-right">
                      <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">masukss mas</a>
                      </li>
                      <li class="nav-item">
                      <button type="button" class="btn btn-outline-success">daftar cok</button>
                      </li>
                    </ul>
                  
                  </div>
                
              </div>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}
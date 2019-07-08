import React from 'react';


import '../css/navbar.css';
// import {Link} from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
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
        <nav class="navbar navbar-expand-sm bg-light navbar-dark">
        
          <img class="logo" src="http://1.bp.blogspot.com/-MYObb95pjRg/VpDg7UwhuFI/AAAAAAAABWw/ZO41qWK-Jgg/s1600/Logo-Tokopedia.jpg" alt="Italian Trulli"/>
          
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                kategori
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">kategori 1</a>
                <a class="dropdown-item" href="#">kategori 2</a>
                <a class="dropdown-item" href="#">kategori 3</a>
              </div>
            </li>
          </ul>
            <form class="form-inline" onSubmit={this.handleSubmit}>
            <div class="input-group">
              
              <input class="form-control mr-sm-9" size="70" type="text" placeholder="Search" />
              <div class="input-group-prepend">
                <span class="input-group-text" ><i class="fas fa-search"></i></span>
                <button>
                <i class="fas fa-shopping-cart"></i>
                </button>
              <h1>
                masuk
              </h1>

              </div>
              </div>
            </form>
        </nav>
      </div>
    );
  }
}
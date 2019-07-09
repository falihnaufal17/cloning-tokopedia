import React from 'react';
import data from '../data/kategori.js'

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
          <div class="modal-dialog modal-lg">

            <div class="modal-content">
             
              <div class="modal-body">
              
              <img src={this.props.gambar} ></img>
               
                

              </div>
              
            </div>

          </div>
        </div>
      </div>
    );
  }
}


   
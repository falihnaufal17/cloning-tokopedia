
import React from 'react';
import data from '../data/kategori.js'

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
    return (
      <div>
        {/* style={{background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg')}} */}
        <div class="modal fade" id="elegantModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div class="modal-dialog " role="document">

            <div class="modal-content form-elegant">

              <div class="modal-header text-center">
                <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Sign in</strong></h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-4">

                <div class="md-form mb-5">
                  <input type="email" id="Form-email1" class="form-control validate"></input>
                  <label data-error="wrong" data-success="right" for="Form-email1">Your email</label>
                </div>

                <div class="md-form pb-3">
                  <input type="password" id="Form-pass1" class="form-control validate"></input>
                  <label data-error="wrong" data-success="right" for="Form-pass1">Your password</label>
                  <p class="font-small blue-text d-flex justify-content-end">Forgot <a href="#" class="blue-text ml-1">
                    Password?</a></p>
                </div>

                <div class="text-center mb-3">
                  <button type="button" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
                </div>
                <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
          with:</p>

                <div class="row my-3 d-flex justify-content-center">

                  <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-facebook-f text-center"></i></button>

                  <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-twitter"></i></button>

                  <button type="button" class="btn btn-white btn-rounded z-depth-1a"><i class="fab fa-google-plus-g"></i></button>
                </div>
              </div>
              <div class="modal-footer mx-5 pt-3 mb-1">
                <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" class="blue-text ml-1">
                  Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#elegantModalForm">Launch
    modal Login Form</a>
        </div>

      </div>
    );
  }
}



import React from 'react';
import data from '../data/kategori.js'
import Swal from 'sweetalert2';

import '../css/modal.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            datas: data
        };
    }

    notif() {
        Swal.fire(
            'Berhasil Login!',
            'Selamat Berbelanja Bosku!',
            'success'
        )

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>


                <div class="modal fade" id="elegantModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">

                        <div class="modal-content form-elegant">

                            <div class="modal-header text-center">
                                <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Masuk</strong></h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body mx-4">

                                <div class="md-form">
                                    <label>Email</label>
                                    <input type="email" id="Form-email1" placeholder="Your email" class="form-control validate"></input>
                                    <label data-error="wrong" data-success="right" for="Form-email1"></label>
                                </div>

                                <div class="md-form">
                                    <label>Password</label>
                                    <input type="password" id="Form-pass1" placeholder="Your password" class="form-control validate"></input>
                                    <label data-error="wrong" data-success="right" for="Form-pass1"></label>
                                    <p class="font-small blue-text d-flex justify-content-end">Lupa <a href="#" class="blue-text ml-1">
                                        Password?</a></p>
                                </div>

                                <div class="text-center mb-3">
                                    <button type="button" class="btn btn-success btn-block btn-rounded z-depth-1a"
                                        onClick={
                                            () => {
                                                Swal.fire({
                                                    title: "Berhasil Login",
                                                    text: "Selamat berbelanja",
                                                    type: "success",
                                                })
                                            }
                                        }>Masuk</button>
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
                                <p class="font-small grey-text d-flex justify-content-end">Belom Daftar kang? <a href="#" class="blue-text ml-1">
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



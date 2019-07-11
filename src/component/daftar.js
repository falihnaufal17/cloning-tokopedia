import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
class FooterBar extends Component {
        render() {
                return (
                        <div style={{ marginTop: '-40px' }}>
                                <link href="https://ecs7.tokopedia.net/built/assets-201803-83da8e0387bc22776e345a3d81e4831f.css" rel="stylesheet" type="text/css"></link>
                                <link href="https://cdn.tokopedia.net/built/1015792777e089b30d1513de1d68e04f.css" rel="stylesheet"></link>
                                <link href="https://cdn.tokopedia.net/built/f8982a944a4be9289087269582414a2b.css" rel="stylesheet"></link>
                                <link href="https://cdn.tokopedia.net/built/72179c070f02717d57e47967372e1429.css" rel="stylesheet"></link>
                                <body >
                                        <header class="user-accounts-header">
                                                <Link to={'/'}>  <a id="homepage-link" target=""><i class="user-tokopedia"></i></a></Link>
                                        </header>
                                        <div id="content-container" class="pt_auto mt-0">
                                                <section class="container mb-20">
                                                        <div class="js__ticker unf-user-ticker user-accounts-ticker hide">
                                                                <div class="unf-user-ticker__body">
                                                                        <ul class="js__ticker-list user-accounts-list"><li><p class="unf-user-ticker__message">Nggak usah khawatir kalau pesanan kamu belum sampai karena Tokopedia akan mengembalikan danamu!</p><p></p><p></p></li></ul>
                                                                </div>
                                                                <div class="js__close-ticker unf-user-ticker__action unf-user-ticker__action--close"></div>
                                                                <input type="hidden" id="ticker_url" value="https://gql.tokopedia.com/query"></input>
                                                        </div>

                                                        <div class="row-fluid user-accounts-container">
                                                                <div class="span6">
                                                                        <div class="user-accounts-logo">
                                                                                <img class="user-accounts-logo__img" src="https://ecs7.tokopedia.net/img/content/register_new.png" alt="tokopedia register"></img>
                                                                                <h2 class="user-accounts-logo__title">Jual Beli Mudah Hanya di Tokopedia</h2>
                                                                                <p>Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
                                                                        </div>
                                                                </div>
                                                                <div class="span6 ta-center">
                                                                        <div class="user-accounts-form user-accounts-form--register user-accounts-form--border">
                                                                                <div class="user-accounts-form__header">
                                                                                        <h2 class="user-accounts-form__title">Daftar Sekarang</h2>
                                                                                        <label class="user-accounts-form__text">Sudah punya akun Tokopedia? <a data-url="https://www.tokopedia.com/login" id="link-page" class="fw-semibold">Masuk</a></label>
                                                                                </div>
                                                                                <form id="register-form" name="register_form" novalidate="novalidate">
                                                                                        <ul class="user-accounts-alt__list user-accounts-alt__list--register">
                                                                                                <li class="user-accounts-alt__list-item user-accounts-alt__list-item--register">
                                                                                                        <a id="fb-button">
                                                                                                                <i class="user-accounts-alt__icon user-icon-facebook"></i>
                                                                                                                <span id="fb-btn" class="user-accounts-alt__button-text">Facebook</span>
                                                                                                        </a>
                                                                                                </li>
                                                                                                <li class="user-accounts-alt__list-item user-accounts-alt__list-item--register">
                                                                                                        <a id="google-button" >
                                                                                                                <i class="user-accounts-alt__icon user-icon-google"></i>
                                                                                                                <span class="user-accounts-alt__button-text">Google</span>
                                                                                                        </a>
                                                                                                </li>
                                                                                        </ul>
                                                                                        <div class="user-accounts-alt">
                                                                                                <div class="user-accounts-alt__separator">
                                                                                                        <span class="user-accounts-hline"></span>
                                                                                                        <span class="user-accounts-alt__separator-text">atau daftar dengan</span>
                                                                                                        <span class="user-accounts-hline"></span>
                                                                                                </div>
                                                                                        </div>
                                                                                        <div class="unf-user-input mb-10">
                                                                                                <label class="unf-user-input__label" for="register">Nomor Ponsel atau Email</label>
                                                                                                <input type="text" id="register" name="register" value="" autocomplete="off" class="js__input-register unf-user-input__control"></input>
                                                                                                <div class="js__suggestion user-accounts-suggest">
                                                                                                        <ul class="js__suggestion-list user-accounts-suggest__list"></ul>
                                                                                                </div>
                                                                                                <div class="unf-user-input__info">
                                                                                                        <small class="js__register-help unf-user-input__info-msg unf-user-input__info-msg--hide">Kami akan mengirim SMS kode verifikasi</small>
                                                                                                        <small class="js__register-err unf-user-input__info-msg unf-user-input__info-msg--error unf-user-input__info-msg--hide"></small>
                                                                                                </div>
                                                                                        </div>
                                                                                        <button type="submit" class="js__submit-register unf-user-btn unf-user-btn--primary unf-user-btn--block">Daftar</button>
                                                                                        <p class="fs-12 lh-18 mt-15 unf-black-disabled ta-center">
                                                                                                Dengan mendaftar, saya menyetujui<br></br><a id="terms-button" class="unf-green" href="https://www.tokopedia.com/terms.pl" target="_blank">Syarat dan Ketentuan</a> serta <a id="privacy-button" class="unf-green" href="https://www.tokopedia.com/privacy.pl" target="_blank">Kebijakan Privasi</a>.
                      </p>
                                                                                </form>

                                                                        </div>
                                                                </div>
                                                        </div>
                                                </section>
                                                <section>

                                                        <div class="js__modal-email-exist unf-modal fade">
                                                                <div class="unf-modal__inner unf-modal__inner--register">
                                                                        <div class="unf-modal__header unf-modal__header--register">
                                                                                <h3 class="unf-modal__header-title">Email Sudah Terdaftar</h3>
                                                                                <a><i id="close-email-exist" class="js__close-modal unf-modal__close user-icon-close-modal"></i></a>
                                                                        </div>
                                                                        <div class="unf-modal__content unf-modal__content--register">
                                                                                <p>Lanjut masuk dengan email ini<br></br><span class="email-view"></span>?</p>
                                                                        </div>
                                                                        <div class="unf-modal__footer unf-modal__footer--register">
                                                                                <button id="edit-login-email" class="js__close-modal btn btn-second btn--register">Ubah</button>
                                                                                <button class="js__submit-email btn btn-action btn--register">Ya, Masuk</button>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <div class="js__modal-phone-exist unf-modal fade">
                                                                <div class="unf-modal__inner unf-modal__inner--register">
                                                                        <div class="unf-modal__header unf-modal__header--register">
                                                                                <h3 class="unf-modal__header-title">Nomor Ponsel Sudah Terdaftar</h3>
                                                                                <a><i id="close-phone-exist" class="js__close-modal unf-modal__close user-icon-close-modal"></i></a>
                                                                        </div>
                                                                        <div class="unf-modal__content unf-modal__content--register">
                                                                                <p>Lanjut masuk dengan nomor ini<br></br><span class="phone-view"></span>?</p>
                                                                        </div>
                                                                        <div class="unf-modal__footer unf-modal__footer--register">
                                                                                <button id="edit-login-phone" class="js__close-modal btn btn-second btn--register">Ubah</button>
                                                                                <button class="js__login-phone btn btn-action btn--register">Ya, Masuk</button>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <div class="js__modal-phone-confirm unf-modal fade">
                                                                <div class="unf-modal__inner unf-modal__inner--register">
                                                                        <div class="unf-modal__header unf-modal__header--register">
                                                                                <h3 class="unf-modal__header-title phone-view"></h3>
                                                                                <a><i class="js__close-modal unf-modal__close user-icon-close-modal"></i></a>
                                                                        </div>
                                                                        <div class="unf-modal__content unf-modal__content--register">
                                                                                <p>Apakah nomor ponsel yang Anda masukkan sudah benar?</p>
                                                                        </div>
                                                                        <div class="unf-modal__footer unf-modal__footer--register">
                                                                                <button id="edit-register-phone" class="js__close-modal btn btn-second btn--register">Ubah</button>
                                                                                <button class="js__register-phone btn btn-action btn--register">Ya, Benar</button>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <div class="js__modal-email-confirm unf-modal fade">
                                                                <div class="unf-modal__inner unf-modal__inner--register">
                                                                        <div class="unf-modal__header unf-modal__header--register">
                                                                                <h3 class="unf-modal__header-title email-view"></h3>
                                                                                <a><i class="js__close-modal unf-modal__close user-icon-close-modal"></i></a>
                                                                        </div>
                                                                        <div class="unf-modal__content unf-modal__content--register">
                                                                                <p>Apakah email yang Anda masukkan sudah benar?</p>
                                                                        </div>
                                                                        <div class="unf-modal__footer unf-modal__footer--register">
                                                                                <button id="edit-register-email" class="js__close-modal btn btn-second btn--register">Ubah</button>
                                                                                <button class="js__register-email btn btn-action btn--register">Ya, Benar</button>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </section>
                                        </div>
                                        <footer class="user-accounts-footer">
                                                <div class="container">
                                                        <div class="row-fluid">
                                                                <div class="pull-left">
                                                                        <span class="year">© 2009-2019, PT Tokopedia</span>
                                                                        <span class="user-accounts-footer__link"><a id="help-link" href="https://www.tokopedia.com/contact-us?pid=1" target="_blank">Bantuan</a></span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <img src="https://accounts.tokopedia.com/marketplace/pixel" onerror="this.style.display = &quot;none&quot;"></img>
                                        </footer>
                                </body>
                        </div>

                );
        }
}



export default FooterBar;


import React, { Component } from 'react';
import '../App.css';
class FooterBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  
  
      
        <div className='footer-layout'>
          <footer class="footer-wrapper s-footer-wrapper">
            <div class="footer-main">
              <div class="container">
                <div class="row">
                  <div class="footer-item">
                    <ul>
                      <li><a href="https://www.tokopedia.com/careers/">Karir</a></li>
                      <li><a href="https://www.tokopedia.com/blog/" target="_blank">Blog</a></li>
                      <li><a href="https://www.tokopedia.com/official-store/" target="_blank">Official Store</a></li>
                      <li><a href="https://www.tokopedia.com/daftar-halaman/" target="_blank">Tagihan &amp; Top up</a></li>
                    </ul>
                  </div>
                  <div class="footer-item">
                    <ul>
                      <li>
                        <a href="https://tiket.tokopedia.com/kereta-api/" target="_blank">Tiket Kereta</a>
                      </li>
                      <li>
                        <a href="https://seller.tokopedia.com/edu/" target="_blank">Pusat Penjual</a></li>
                      <li>
                        <a href="https://www.tokopedia.com/hot">Hotlist</a>
                      </li>
                      <li>
                        <a href="https://www.tokopedia.com/keuangan">Keuangan</a>
                      </li>
                    </ul>
                  </div>
                  <div class="footer-item">
                    <ul>
                      <li><a href="https://www.tokopedia.com/help?nref=helpfooter">Bantuan Tokopedia</a></li>
                      <li><a href="https://www.tokopedia.com/mobile-apps/">Aplikasi Tokopedia</a></li>
                      <li><a href="https://www.tokopedia.com/mitra-toppers/?nref=mtfoot" target="_blank">Mitra Toppers</a></li>
                      <li><a href="https://seller.tokopedia.com/edu/cara-daftar-official-store/" target="_blank">Daftar Official Store</a></li>
                    </ul>
                  </div>
                  <div class="footer-item">
                    <ul>
                      <li><a href="https://www.tokopedia.com/p">Kategori</a></li>
                      <li><a href="https://kamus.tokopedia.com/" target="_blank">Kamus Tokopedia</a></li>
                      <li><a href="https://www.tokopedia.com/deals/jakarta/?ispulsa=1">Deals Tokopedia</a></li>
                      <li><a href="https://www.tokopedia.com/flight">Tiket Pesawat</a></li>
                    </ul>
                  </div>
                  <div class="footer-item">
                    <div class="seal-account">
                      <div class="pci-seal clearfix">
                        <h3 class="mb-10">Keamanan</h3>
                          <a class="mt-5" href="https://seal.controlcase.com/index.php?page=showCert&amp;cId=3968489199" target="_blank">
                            <img src="https://ecs7.tokopedia.net/img/footer/PCI_logo.png" oncontextmenu="return false;"></img>
                          </a>
                          <hr></hr>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            <div class="container footer-additional">
              <div class="row-fluid">
                <div class="span4">
                  <img src="https://ecs7.tokopedia.net/img/footer/toped.png" width="40" class="mr-5" alt="Tokopedia Logo"></img>
                  <div class="inline-block va-middle">
                    <small class="muted">© 2009-2019, PT Tokopedia </small>
                    <small class="muted">Server process time: 0.107 secs.</small>
                  </div>
                </div>
                <div class="span4 text-center"></div>
                  <div class="span4">
                    <div class="row-fluid">
                      <div class="span5 pull-right">
                        <div class="btn-group pull-right">
                          <a class="btn btn-switch btn-small active">
                            <small>Indonesia</small>
                          </a>
                          <a class="btn btn-switch btn-small switch-lang" id="lang-en">
                            <small>English</small>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src="https://accounts.tokopedia.com/marketplace/pixel" onerror="this.style.display = &quot;none&quot;"></img>
              <img src="https://www.tokopedia.com/bacon.gif" onerror="this.style.display = &quot;none&quot;"></img>
            </div>
            </footer>
        </div>
        </nav>
    );
  }
}
                    


export default FooterBar;


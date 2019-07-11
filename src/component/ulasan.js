//libray
import React, { Component } from 'react'

import '../css/tab.css';
//Css
import 'bootstrap/dist/css/bootstrap.min.css';

import Dummy from '../data/produk'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            data: Dummy,
        }
    }
    
    render() {
        

        return (
            <div>
                <div class="tabset">
                
                  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked></input>
                  <label for="tab1"> <i class="far fa-list-alt"></i> Informasi Produk</label>
                
                
                <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"></input>
                <label for="tab2"><i class="fas fa-star"></i> Ulasan</label>
                
                <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"></input>
                <label for="tab3"><i class="fas fa-comments"></i>  Diskusi Produk</label>
                
                <div class="tab-panels">
                  <section id="marzen" class="tab-panel">
                    <h2>{this.props.baranangsiang}</h2>
                    <p> An elegant, malty German amber lager with a clean, rich, toasty and bready malt flavor, restrained bitterness, and a dry finish that encourages another drink. The overall malt impression is soft, elegant, and complex, with a rich aftertaste that is never cloying or heavy.</p>
                    <p> As the name suggests, brewed as a stronger “March beer” in March and lagered in cold caves over the summer. Modern versions trace back to the lager developed by Spaten in 1841, contemporaneous to the development of Vienna lager. However, the Märzen name is much older than 1841; the early ones were dark brown, and in Austria the name implied a strength band (14 °P) rather than a style. The German amber lager version (in the Viennese style of the time) was first served at Oktoberfest in 1872, a tradition that lasted until 1990 when the golden Festbier was adopted as the standard festival beer.</p>
                </section>
                  <section id="rauchbier" class="tab-panel">
                    <h2>6B. Ulasan</h2>
                    <p><strong>Overall Impression:</strong>  An elegant, malty German amber lager with a balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile, and an attenuated finish are characteristic.</p>
                    <p><strong>History:</strong> A historical specialty of the city of Bamberg, in the Franconian region of Bavaria in Germany. Beechwood-smoked malt is used to make a Märzen-style amber lager. The smoke character of the malt varies by maltster; some breweries produce their own smoked malt (rauchmalz).</p>
                  </section>
                  <section id="dunkles" class="tab-panel">
                    <h2>6C. Diskusi Produk</h2>
                    <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p>
                    <p><strong>History:</strong> Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and advertisements.</p>
                  </section>
                </div>
                
              </div>
            </div>

        )
    }
}
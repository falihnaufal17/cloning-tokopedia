import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'reactstrap';
// using ES6 modules
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import './index.css'


export default class category extends Component {
    render() {
        return (
            <div>
                <Row className="CategoryWrap">
                    <Col xs="6">
                        <Row>
                            <h5>Kategori Pilihan</h5>
                            <Col>
                                <Row className="categoryPilihan">
                                    <Col xs="2.1" className="colCategoryPilihan">
                                        <img className="imgCategoryPilihan" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/3/461992991/461992991_a130b4b5-bfe3-4252-a903-c7eb2102a40d_700_700.jpg" />
                                        <p className="titleCategoryPilihan">Coffe & Tea</p>
                                        <p className="subTitleCategoryPilihan">Maker</p>
                                    </Col>
                                    <Col xs="2.1" className="colCategoryPilihan">
                                        <img className="imgCategoryPilihan" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/23/2157406/2157406_cb39d7b8-6b27-459b-9610-f7501f33844c_1080_1080.jpg" />
                                        <p className="titleCategoryPilihan">Tas Selempang</p>
                                        <p className="subTitleCategoryPilihan">Pria</p>
                                    </Col>
                                    <Col xs="2.1" className="colCategoryPilihan">
                                        <img className="imgCategoryPilihan" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/15/14396081/14396081_918abe47-f44e-4514-aec0-e0da6d13cd47_2048_2048.jpg" />
                                        <p className="titleCategoryPilihan">Flat Shoes</p>
                                        <p className="subTitleCategoryPilihan">Wanita</p>
                                    </Col>
                                    <Col xs="2.1" className="colCategoryPilihan">
                                        <img className="imgCategoryPilihan" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/16/25802229/25802229_e23494bc-3dba-4ccb-9bf2-c822ba21b615_799_575.jpg" />
                                        <p className="titleCategoryPilihan">Makanan</p>
                                        <p className="subTitleCategoryPilihan">Kering</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="6" style={{border:`7px`}}>
                        <h5 style={{ float: 'left' }}>Top Up & Tagihan</h5>
                        <h6 style={{ float: 'right', color: 'green' }}>Lihat Semua</h6>
                        <Col style={{ width: '100%', border: '1px solid rgb(204, 204, 204, 0.5)', height: '130px', borderRadius: '5px', marginTop: '40px' }}>
                        <Tabs defaultTab="one" onChange={(tabId) => { console.log(tabId) }} > 
                            <TabList>
                                <Tab tabFor="one">Pulsa</Tab>
                                <Tab tabFor="two">Paket Data</Tab>
                                <Tab tabFor="three">Listrik</Tab>
                                <Tab tabFor="fourth">Flight</Tab>
                            </TabList>
                            <TabPanel tabId="one">
                            <Row>
                                <p class=" col-md-4">Nomer HP</p>
                                <p class=" col-md-6">Jumlah pulsa</p>
                            </Row>
                            <form style={{ marginTop: '-20px' ,justifyContent:"left"}} class="form-inline" action="/action_page.php">
                                <input type="number" class="form-control mr-sm-2 col-md-4" />
                                <select class="form-control mr-sm-2 col-md-5" placeholder="jumlah pulsa" id="sel1">
                                    <option>10.000</option>
                                    <option>20.000</option>
                                    <option>30.000</option>
                                    <option>40.000</option>
                                </select>
                                <button class="btn btn-success col-md-2" type="submit">Search</button>
                            </form>
                            </TabPanel>
                            <TabPanel tabId="two">
                            <Row>
                                <p class=" col-md-4">Nomer HP</p>
                                <p class=" col-md-6">Jumlah Kuota   </p>
                            </Row>
                            <form style={{ marginTop: '-20px' ,justifyContent:"left"}} class="form-inline" action="/action_page.php">
                                <input type="number" class="form-control mr-sm-2 col-md-4" />
                                <select class="form-control mr-sm-2 col-md-5" placeholder="jumlah pulsa" id="sel1">
                                    <option>1 GB</option>
                                    <option>2 GB</option>
                                    <option>4 GB</option>
                                    <option>8 GB</option>
                                </select>
                                <button class="btn btn-success col-md-2" type="submit">Search</button>
                            </form>
                            </TabPanel>
                            <TabPanel tabId="three">
                            <Row>
                                <p class=" col-md-3">ID Listrik</p>
                                <p class=" col-md-3">Jenis KwH</p>
                                <p class=" col-md-3">Nominal</p>
                            </Row>
                            <form style={{ marginTop: '-20px' ,justifyContent:"center"}} class="form-inline" action="/action_page.php">
                                <input type="text" class="form-control mr-sm-2 col-md-3" />
                                <select class="form-control mr-sm-2 col-md-3" placeholder="jumlah pulsa" id="sel1">
                                    <option>3123</option>
                                    <option>22</option>
                                    <option>88</option>
                                    <option>642</option>
                                </select>
                                <select class="form-control mr-sm-2 col-md-3" placeholder="jumlah pulsa" id="sel1">
                                    <option>10.000</option>
                                    <option>20.000</option>
                                    <option>30.000</option>
                                    <option>40.000</option>
                                </select>
                                <button class="btn btn-success col-md-2" type="submit">Search</button>
                            </form>
                            </TabPanel>
                            <TabPanel tabId="fourth">
                                    <h1><i class="fas fa-plane"></i><i class="far fa-building"></i><i class="far fa-building"></i></h1>
                            </TabPanel>
                            </Tabs>
                        </Col>
                    </Col>

                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <ul style={{ display: 'flex', listStyleType: 'none', marginLeft: '-30px' }}>
                                <li className="categotyBot" style={{ width: "180px" }}><img
                                    src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/7/9/20723472/20723472_d7d7462c-e171-4827-b7cc-962ba89fc1a9.png"
                                    style={{
                                        width: '30px',
                                        marginRight: '0.4em'
                                    }}
                                />
                                    Semua Kategori
                                </li>
                                <li className="categotyBot" style={{ width: "120px" }}><img
                                    src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/10/20723472/20723472_bd323646-a035-40d9-a349-3d13df574c89.png"
                                    style={{
                                        width: '30px',
                                        marginRight: '0.4em'
                                    }} />
                                    Belanja
                                    </li>
                                <li className="categotyBot" style={{ width: "80px" }}><img
                                    src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/6/12/20723472/20723472_4a578bd5-4d1c-4f27-b353-71a316424d0b.png"
                                    style={{
                                        width: '30px',
                                        marginRight: '0.4em'
                                    }}
                                />Jual</li>
                                <li className="categotyBot" style={{ width: "200px" }}> <img
                                    src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/2/3127195/3127195_e6fcdfd3-313d-4b3d-969d-4e87944b0c29.png"
                                    style={{
                                        width: '30px',
                                        marginRight: '0.4em'
                                    }} />
                                    Handphone & Tablet</li>
                                <li className="categotyBot" style={{ width: "90px" }}><img
                                    src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/2/3127195/3127195_426c7c26-e0e7-47cb-ba5a-52241b625d71.png"
                                    style={{
                                        width: '30px',
                                        marginRight: '0.2em'
                                    }} />Pulsa</li>
                                <li className="categotyBot" style={{ width: "140px" }}><img
                                    src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/2/3127195/3127195_084574be-ac35-40a3-b186-acf9f45b4d61.png"
                                    style={{
                                        width: '30px',
                                        marginRight: '0.4em'
                                    }} />Pascabayar</li>
                                <li className="categotyBot" style={{ width: "90px" }}><img
                                    src="https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/1/3127195/3127195_2258af2c-550d-4b7f-a8d4-f62178070ed8.png"
                                    style={{
                                        width: '30px',
                                        marginRight: '0.4em'
                                    }} />Flight</li>
                            </ul>
                        </Col>
                    </Row>
                </Row>
            </div>
        )
    }
}

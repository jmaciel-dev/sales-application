// resources/assets/js/components/SaleApp.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModalDialogBtn from './layouts/ModalDialogBtn';
import ModalNewSale from './layouts/ModalNewSale';
import SaleNavBar from './layouts/SaleNavBar';
import SaleTable from './layouts/SaleTable';
import SaleTotal from './layouts/SaleTotal';

/**
 * React Component com a classe Pai dos demais components de SaleApp.
 *
 * @param
 * @returns
 */
class SaleApp extends React.Component {
    render () {
        return (
            <BrowserRouter>
            <div className="container-sm">
                <div className="row">
                    <div className="col-sm">
                        <SaleNavBar />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <div className="card">
                            <ModalDialogBtn />
                            <SaleTable sales={this.props.sales}/>
                            <SaleTotal />
                        </div>
                    </div>
                </div>
                <ModalNewSale />
            </div>
            </BrowserRouter>
        );
    }
}

const SALES = [
    {name:'Produto A', price: '10,00', provider:'Forn A, Forn D'},
    {name:'Produto B', price:'3,00', provider:'---'},
    {name:'Produto C', price:'5,00', provider:'Forn C'},
];
if (document.getElementById('sale-app')) {
ReactDOM.render(<SaleApp sales={SALES}/>, document.getElementById('sale-app'))
console.log('render sale-app');
}

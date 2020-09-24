// resources/assets/js/components/App.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Header from './layouts/Header';
//import Body from './Body';
//import Footer from './Footer'


class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <h1>Teste</h1>
                </div>
                <div>
                    //<Body />
                </div>
                <div>
                    //<Footer />
                </div>
            </BrowserRouter>
        );
    }
}
if (document.getElementById('app')) {
ReactDOM.render(<App/>, document.getElementById('app'))
console.log('render app');
}

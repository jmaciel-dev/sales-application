// resources/assets/js/components/App.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Header from './layouts/Header'; //ERRADO!!!
import NavBar from './layouts/NavBar';
//import Body from './Body'; //ERRADO!!!
//import Footer from './Footer' //ERRADO!!!


class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                </div>
            </BrowserRouter>
        );
    }
}
if (document.getElementById('app')) {
ReactDOM.render(<App />, document.getElementById('app'))
console.log('render app');
}

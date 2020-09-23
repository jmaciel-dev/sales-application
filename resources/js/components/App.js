// resources/assets/js/components/App.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layouts/Header';
//import Body from './Body';
//import Footer from './Footer'

/**
 * [App description]
 * @extends Component
 */
class App extends Component {
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

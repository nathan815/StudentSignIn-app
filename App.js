import React, { Component } from 'react';
import { Provider } from 'react-redux';
 
import store from './app/store';
import Tabs from './app/routes.js';
 
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Tabs />
            </Provider>
        );
    }
}
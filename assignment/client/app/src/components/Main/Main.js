import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import Route from './routes';
StatusBar.setHidden(true);

export default class Main extends Component {
    render() {
        return (
            <Route />
        );
    }
}
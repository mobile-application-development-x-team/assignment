import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import Tabs from './Config/routes';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Tabs />
        );
    }
}

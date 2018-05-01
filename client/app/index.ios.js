import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import MyApp from './src/components/App';

export default class MyShop extends Component{
    render() {
        return <MyApp />;
    }
}

AppRegistry.registerComponent('Myshop', () => MyShop);
import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import Authentication from '../../../Authentication/Authentication';

import {StackNavigator} from 'react-navigation';

import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

const HOME = StackNavigator({
    HomeView: { screen: HomeView },
    ListProduct: { screen: ListProduct },
    ProductDetail: { screen: ProductDetail },
    Collection: { screen: Collection },
    TopProduct: { screen: TopProduct },
    Authentication: { screen: Authentication }
}, {
        headerMode: 'none',
        initialRouteName: 'HomeView'
    });

export default class Home extends Component {

    render() {
        return (
            <HomeView />
        );
    }
}
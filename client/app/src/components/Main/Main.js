import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StatusBar, DrawerLayoutAndroid } from 'react-native';

import Menu from "./Menu";
import Tabs from './Shop/ConfigRoutes';

StatusBar.setHidden(true);

export default class Main extends Component {

    loadingHome() {
        console.log('Loading Home');
    }

    gotoSearch() {
        console.log('go to search');
    }

    gotoCart() {
        console.log('go to cart');
    }

    gotoContact() {
        console.log('go to contact');
    }

    gotoOrderHistory() {
        console.log('go to order history');
    }

    gotoChangeInfo() {
        console.log('go to change info');
    }

    gotoAuthentication() {
        console.log('go to authentication');
    }

    // close drawer
    closeControlPanel = () => {
        this._drawer.close()
    };

    // open drawer
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {

        var navigationView = (
            <View>
                <Menu />
            </View>
        );

        return (
            // please slide right to open Menu
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
            >
                <Tabs />
            </DrawerLayoutAndroid>
        );
    }
}
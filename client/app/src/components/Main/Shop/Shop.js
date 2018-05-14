import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';

import home from '../../../media/appIcon/home.png';
import home0 from '../../../media/appIcon/home0.png';
import contact from '../../../media/appIcon/contact.png';
import contact0 from '../../../media/appIcon/contact0.png';
import search from '../../../media/appIcon/search.png';
import search0 from '../../../media/appIcon/search0.png';
import cart from '../../../media/appIcon/cart.png';
import cart0 from '../../../media/appIcon/cart0.png';



const { height } = Dimensions.get('window');

const Tabs = TabNavigator(
    {
        Home: {
            screen: Home,

        },
        Cart: {
            screen: Cart
        },
        Search: {
            screen: Search
        },
        Contact: {
            screen: Contact,
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#01579b',
            inactiveTintColor: '#fff',
            upperCaseLabel: false,
            showIcon: true,
            labelStyle: {
                fontWeight: '900',
                fontSize: 18
            },
            activeBackgroundColor: '#01579b'
        },
        tabBarPosition: "bottom",
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Home") {
                    <View>
                        <Image
                            source={home}
                            style={{width: 20, height: 20}}
                        />
                    </View>
                } else if (routeName === "Cart") {
                    <View>
                        <Image
                            source={cart}
                            style={{width: 20, height: 20}}
                        />
                    </View>
                } else if (routeName === "Search") {
                    <View>
                        <Image
                            source={search}
                            style={{width: 20, height: 20}}
                        />
                    </View>
                } else {
                    <View>
                        <Image
                            source={contact}
                            style={{width: 20, height: 20}}
                        />
                    </View>
                }
            },
        }),
    }

);
export default class Shop extends Component {

    openMenu = (route) => () => {
        this.props.navigation.navigate({ routeName: route });
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Header onOpen={this.openMenu('Menu')} />
                <Tabs />
            </View>
        );
    }
}
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';

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
            activeTintColor: '#cddc39',
            inactiveTintColor: '#f9fbe7',
            upperCaseLabel: false,
            // showIcon: true,
            labelStyle: {
                fontWeight: '900',
                fontSize: 15
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
                            source={require('../images/home.png')}
                        />
                    </View>
                } else if (routeName === "Cart") {
                    <View>
                        <Image
                            source={require('../images/cart.png')}
                        />
                    </View>
                } else if (routeName === "Search") {
                    <View>
                        <Image
                            source={require('../images/search.png')}
                        />
                    </View>
                } else {
                    <View>
                        <Image
                            source={require('../images/contact.png')}
                        />
                    </View>
                }
            },
        }),
    }

);
export default class Shop extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height / 10, backgroundColor: '#03a9f4' }}>
                    <TouchableOpacity>
                        <Text style={{alignContent: 'center'}}> TOP BAR</Text>
                    </TouchableOpacity>
                </View>
                <Tabs />
            </View>
        );
    }
}
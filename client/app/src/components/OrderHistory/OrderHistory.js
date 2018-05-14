import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, StatusBar
} from 'react-native';
import backSpecial from '../../media/appIcon/backs.png';

StatusBar.setHidden(true);

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
    }

    backShop = (route) => () => {
        this.props.navigation.navigate({ routeName: route });
    }


    render() {
        const { wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>Order History</Text>
                    <TouchableOpacity onPress={this.backShop('Shop')}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <Text>BODY</Text>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { 
        flex: 1, 
        backgroundColor: '#03a9f4', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row', paddingHorizontal: 10 
    },
    headerTitle: { 
        color: '#fff', 
        fontSize: 20,
        fontWeight: '600'
    },
    backIconStyle: { 
        width: 30, 
        height: 30,
    },
    body: { 
        flex: 10, 
        backgroundColor: '#F6F6F6' 
    },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }
});
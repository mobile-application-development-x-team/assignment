import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ListView, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    render() {
        const { container, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>PRODUCT PRICE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} >
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>PRODUCT PRICE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} >
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>PRODUCT PRICE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} >
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>PRODUCT PRICE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#9e9e9e',
        fontSize: 20,
        fontWeight: '600'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowOffset: { width: 0, height: 3 },
        borderRadius: 5,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        margin: 5
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        color: '#1a237e',
        fontWeight: '600'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        color: '#d32f2f',
        fontWeight: '900'
    }
});
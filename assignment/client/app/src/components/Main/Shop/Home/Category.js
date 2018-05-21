import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import maxiImage from '../../../../media/temp/maxi.jpg';
import partyImage from '../../../../media/temp/party.jpg';
import miniImage from '../../../../media/temp/mini.jpg';
import fitImage from '../../../../media/temp/fit.jpg';

const { width } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={imageStyle}>
                    <Swiper
                        style={imageStyle}
                        showsPagination={true}
                        autoplay={true}
                    >
                        <Image
                            source={maxiImage}
                            style={imageStyle}
                        />
                        <Image
                            source={partyImage}
                            style={imageStyle}
                        />
                        <Image
                            source={miniImage}
                            style={imageStyle}
                        />
                        <Image
                            source={fitImage}
                            style={imageStyle}
                        />
                    </Swiper>
                </View>
            </View >
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',
        marginTop: 5,
        marginBottom: 10,
        fontWeight: '600',
        paddingTop: 0
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }
});

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';

const { width } = Dimensions.get('window');

export default class Collection extends Component {
    constructor(props) {
        super(props);
        this.listCollection = [];
    }
    gotoListProduct(listCollection) {
        // this.props.navigation.navigate('ListProduct', { listCollection: listCollection });
    }
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        const navigationOptions = {
            title: 'Collection',
        }
        return (
            <View style={wrapper}>
                <View>
                    <Text style={textStyle}>COLLECTION</Text>
                </View>
                <TouchableOpacity onPress={this.gotoListProduct.bind(this, this.listCollection)}>
                    <Image source={bannerImage} style={imageStyle} />
                </TouchableOpacity>
            </View>
        );

    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '600',
        paddingTop: 0

    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }

});
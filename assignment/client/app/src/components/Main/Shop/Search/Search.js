import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, ListView,
    Image, RefreshControl, ScrollView, Dimensions
} from 'react-native';

import url from '../../../../media/images/product/54.jpg';

export default class Search extends Component {
    render() {
        const { container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <View style={container}>
                <ScrollView>
                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={url} />
                        <View style={productInfo}>
                            <Text style={txtName}>PRODUCT NAME</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material cotton</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color DarkOliveGreen</Text>
                                <View style={{ backgroundColor: '#B10D65', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',

    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10,
        marginBottom: 50
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        color: '#B10D65',
    },
    txtMaterial: {
    },
    txtColor: {
    },
    txtShowDetail: {
        color: '#B10D65',
        fontSize: 11
    }
});
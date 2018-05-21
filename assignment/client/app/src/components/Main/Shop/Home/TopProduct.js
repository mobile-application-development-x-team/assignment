import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ListView, TouchableOpacity, ScrollView } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

import URL from '../../../../configIP/config';

const urlImage = '../../../../media/images/product/';


export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds
        };
        this.arr = [];
        const { navigation } = this.props;
    }

    gotoProductDetail(product) {
        // this.props.navigation.navigate('ProductDetail', { product: product });
    }

    static navigationOptions = {
        title: 'TopProduct'
    };

    componentDidMount() {
        return fetch(URL + '/new')
            .then((res) => res.json())
            .then((resJson) => {
                this.arr = resJson;
                this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arr) });
            })
            .catch((e) => {
                console.error(e);
            })
    }

    render() {
        const { container, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice } = styles;
        const navigationOptions = {
            title: 'TopProduct',
        }
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>

                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={this.state.listProducts}
                    renderRow={product => (
                        <TouchableOpacity style={productContainer} onPress={() => {
                            this.props.navigation.navigate('HomeView', { product: product });
                        }}>
                            <Image source={{ uri: `${url}${product.images[0].link}` }} style={productImage} />
                            <Text style={productName}>{product.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                />
                {/* <ScrollView>
                    <View style={body}>
                        <TouchableOpacity style={productContainer} onPress={this.gotoProductDetail.bind(this)}>
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
                </ScrollView> */}
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
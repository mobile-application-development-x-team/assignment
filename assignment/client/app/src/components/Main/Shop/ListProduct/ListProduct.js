import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, ListView,
    Image, RefreshControl, ScrollView
} from 'react-native';

import backList from '../../../../media/appIcon/backList.png';

import url from '../../../../media/images/product/54.jpg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
        };

        // create a arrayproduct local to demo feature
        this.arrProducts = [
            {
                "_id": "5afbefd7ec0d9a1ff84a4021",
                "name": "black off the",
                "id_type": 4,
                "price": "124",
                "color": "Khaki",
                "material": "leather",
                "description": "A maxi dress gets breezy with sexy front slits that let your legs steal the spotlight. The smocked, off-shoulder bodice contours curves for a comfortable, flattering look day or night. It''s a perfect match for heeled sandals and a confident strut.",
                "new": 0,
                "inCollection": 0,
                "images": [
                    {
                        "_id": "5afbefd7ec0d9a1ff84a4023",
                        "link": "../../../../media/images/product/54.jpg"
                    },
                    {
                        "_id": "5afbefd7ec0d9a1ff84a4022",
                        "link": "../../../../media/images/product/55.jpg"
                    }
                ]
            },
            {
                "_id": "5afbf1b65a9713193000e422",
                "name": "contrast embro",
                "id_type": 4,
                "price": "121",
                "color": "Fuchsia",
                "material": "leather",
                "description": "Take your vacay-ready style to the next level with the bold personality of this embroidered maxi dress. With casually elegant details like a tassel-tie plunging neckline and hi-lo hem, it promises to be a total head-turner with heels.",
                "new": 1,
                "inCollection": 0,
                "images": [
                    {
                        "_id": "5afbf1b65a9713193000e424",
                        "link": "../../../../media/images/product/56.jpg"
                    },
                    {
                        "_id": "5afbf1b65a9713193000e423",
                        "link": "../../../../media/images/product/57.jpg"
                    }
                ]
            },
            {
                "_id": "5afbf2626f7156283c0cebaa",
                "name": "floral print t",
                "id_type": 4,
                "price": "133",
                "color": "LimeGreen",
                "material": "cotton",
                "description": "Looking for that next great dress to take on summer getaways or just out to weekend brunch? We''ve got you covered with this breezy, floral print maxi. Flirty ruffles dance along the skirt, while soft tassel-kissed straps tie the look together.",
                "new": 1,
                "inCollection": 0,
                "images": [
                    {
                        "_id": "5afbf2626f7156283c0cebac",
                        "link": "../../../../media/images/product/58.jpg"
                    },
                    {
                        "_id": "5afbf2626f7156283c0cebab",
                        "link": "../../../../media/images/product/59.jpg"
                    }
                ]
            },
            {
                "_id": "5afbf2ccdbad6a2e78d1db8a",
                "name": "star maxi dres",
                "id_type": 4,
                "price": "143",
                "color": "Wheat",
                "material": "fur",
                "description": "Command attention wherever you go in this dramatic maxi dress. A charming star design adds out-of-this-world appeal to your look, while a voluminous skirt sways with your every move.",
                "new": 1,
                "inCollection": 0,
                "images": [
                    {
                        "_id": "5afbf2ccdbad6a2e78d1db8c",
                        "link": "../../../../media/images/product/60.jpg"
                    },
                    {
                        "_id": "5afbf2ccdbad6a2e78d1db8b",
                        "link": "../../../../media/images/product/61.jpg"
                    }
                ]
            },
            {
                "_id": "5afbf32781abd02230bcd175",
                "name": "tropical print",
                "id_type": 4,
                "price": "157",
                "color": "DarkOliveGreen",
                "material": "cotton",
                "description": "Weddings or island destinations, this dress is ready for anything. With plunging keyhole cut-outs and skin-baring strappy sides, less is more when it comes to this dramatic look. Add a fab heel, and you''ve got effortlessly glamorous style on lock.",
                "new": 0,
                "inCollection": 0,
                "images": [
                    {
                        "_id": "5afbf32781abd02230bcd177",
                        "link": "../../../../media/images/product/62.jpg"
                    },
                    {
                        "_id": "5afbf32781abd02230bcd176",
                        "link": "../../../../media/images/product/63.jpg"
                    }
                ]
            },
        ];
    }

    componentWillMount() {
        this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arrProducts) });
    }

    render() {
        const { container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>PARTY DRESS</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    {/* <ListView
                        removeClippedSubviews={false}
                        dataSource={this.state.listProducts}
                        renderRow={product => (
                            <View style={productContainer}>
                                <Image style={productImage} source={{ uri: `${product.images[0].link}` }} />
                                <View style={productInfo}>
                                    <Text style={txtName}>{toTitleCase(product.name)}</Text>
                                    <Text style={txtPrice}>{product.price}$</Text>
                                    <Text style={txtMaterial}>Material {product.material}</Text>
                                    <View style={lastRowInfo}>
                                        <Text style={txtColor}>Colo {product.color}</Text>
                                        <View style={{ backgroundColor: product.color.toLowerCase(), height: 16, width: 16, borderRadius: 8 }} />
                                        <TouchableOpacity>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    /> */}
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
            </View>
        );
    }
}

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
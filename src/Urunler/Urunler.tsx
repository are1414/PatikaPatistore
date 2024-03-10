import React from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import {styles} from './Urunler.style';
const UrunlerCard = ({urunler}: {urunler: any}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.images} source={{uri:urunler.imgURL}}></Image>
            <View style={styles.inner_container}></View>
            <Text style={styles.title}>{urunler.title}</Text>
            <Text style={styles.text}>{urunler.price}</Text>
            <Text style={styles.stok}>{urunler.inStock ? '' : 'StoktaYok'}</Text>
        </View>
    );
};
export default UrunlerCard;

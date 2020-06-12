import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
const MenuItem = props => {
    console.log(props.image)
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.menuItem}>
                <View style={styles.info}>
                    <Text style={styles.header}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                    <Text style={styles.price}>${props.price}</Text>
                </View>
                <View style={styles.image}>
                <ImageBackground source={props.image} style={styles.image}>
                </ImageBackground>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    header: {
        fontSize: 20
    },
    description:{
        margin: 5
    },
    price:{
        margin: 5
    },
    info:{
        width: 250,
    },  
    image:{
        width: 100,
        height: 100,
    },
    menuItem: {
        width: '100%',
        paddingBottom: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 0.5
    },
})
export default MenuItem;
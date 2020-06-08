import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

const CusineCard = props => {
    return (
        <TouchableOpacity
            style={styles.cuisineCard}
            onPress={props.onPress}
        >
            <View style={styles.cardContainer}>
                <View style={styles.cardTitle}>
                    <Text>{props.title}</Text>
                </View>
                <ImageBackground source={props.image} style={styles.image}>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cuisineCard: {
        flex: 1,
        margin: 20,
        height: 170,

    },
    cardTitle:{
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    cardContainer: {
        flex: 1,
        borderRadius: 15,
        elevation: 10,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        overflow: "hidden",
        elevation: 20,
    },
})

export default CusineCard;
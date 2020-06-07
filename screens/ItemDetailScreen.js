import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const ItemDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Item detail screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ItemDetailScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { MENU_ITEMS } from '../data/test-data'

const ItemDetailScreen = props => {
    const menuItemId = props.navigation.getParam('menuItemId')
    const menuItem = MENU_ITEMS.find(item => item.id === menuItemId)
    return (
        <View style={styles.screen}>
            <Text>{menuItem.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ItemDetailScreen;
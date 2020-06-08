import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { CUISINES } from '../data/test-data'
import Theme from '../constants/Theme'

const MenuScreen = props => {
    const cuisineId = props.navigation.getParam('cuisineId')
    const selectedCuisine = CUISINES.find(cuisine => cuisine.id === cuisineId)
    return (
        <View style={styles.screen}>
            <Text>Menu Screen!</Text>
            <Text>{selectedCuisine.title}</Text>
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

MenuScreen.navigationOptions = navData => {
    const cuisineId = navData.navigation.getParam('cuisineId')
    const selectedCuisine = CUISINES.find(cuisine => cuisine.id === cuisineId)
    return({
        headerTitle: selectedCuisine.title
    })
}

export default MenuScreen;
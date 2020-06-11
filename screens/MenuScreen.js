import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CUISINES, MENU_ITEMS } from '../data/test-data'
import Theme from '../constants/Theme'

const MenuScreen = props => {
    const cuisineId = props.navigation.getParam('cuisineId')
    const selectedCuisine = CUISINES.find(cuisine => cuisine.id === cuisineId)
    const selectedMeals = MENU_ITEMS.filter(item => item.cuisineId === cuisineId)

    const renderMenuItem = itemData => {
        return(<View><Text>{itemData.item.title}</Text></View>)
    }

    return (
        <View style={styles.screen}>
            <FlatList data={selectedMeals} renderItem={renderMenuItem}/>
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
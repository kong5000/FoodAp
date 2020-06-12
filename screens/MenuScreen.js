import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CUISINES, MENU_ITEMS } from '../data/test-data'
import Theme from '../constants/Theme'
import MenuItem from '../components/MenuItem'

const MenuScreen = props => {
    const cuisineId = props.navigation.getParam('cuisineId')
    const selectedCuisine = CUISINES.find(cuisine => cuisine.id === cuisineId)
    const selectedMeals = MENU_ITEMS.filter(item => item.cuisineId === cuisineId)

    const onItemSelected = menuItemId => {
        props.navigation.navigate({
            routeName: 'Detail',
            params: {
               menuItemId: menuItemId
            }
        })
    }

const renderMenuItem = itemData => {
    return (<MenuItem
        itemId={itemData.item.id}
        title={itemData.item.title}
        price={itemData.item.price}
        description={itemData.item.description}
        onPress={onItemSelected}
        image={itemData.item.imageUrl}
    />)
}

return (
    <View style={styles.screen}>
        <FlatList style={styles.list} data={selectedMeals} renderItem={renderMenuItem} />
    </View>
);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    list: {
        width: "100%"
    }
})

MenuScreen.navigationOptions = navData => {
    const cuisineId = navData.navigation.getParam('cuisineId')
    const selectedCuisine = CUISINES.find(cuisine => cuisine.id === cuisineId)
    return ({
        headerTitle: selectedCuisine.title
    })
}

export default MenuScreen;
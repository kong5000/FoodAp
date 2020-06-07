import React from 'react';
import { CUISINES } from '../data/test-data'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Theme from '../constants/Theme'

const renderCuisineCard = (itemData) => {
    return <View style={styles.cuisineCard}><Text>{itemData.item.title}</Text></View>
}

const CuisineSelectionScreen = props => {
    return (
        <FlatList numColumns={2} data={CUISINES} renderItem={renderCuisineCard} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cuisineCard: {
        flex: 1,
        margin: 20,
        height: 200
    }

})

CuisineSelectionScreen.navigationOptions = {
    headerTitle: 'Cuisines',
    headerStyle:{
        backgroundColor: Theme.primaryColor
    },
    headerTintColor:'white'
}

export default CuisineSelectionScreen;
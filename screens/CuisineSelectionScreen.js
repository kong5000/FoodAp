import React from 'react';
import { CUISINES } from '../data/test-data'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Theme from '../constants/Theme'
import CuisineCard from '../components/CusineCard'

const CuisineSelectionScreen = props => {
    const renderCuisineCard = (itemData) => {
        return (
            <CuisineCard
                image={itemData.item.image}
                color={itemData.item.color}
                title={itemData.item.title}
                onPress={() => props.navigation.navigate({
                    routeName: 'Menu',
                    params: {
                        cuisineId: itemData.item.id
                    }
                })} />
        )
    }

    return (
        <FlatList numColumns={2} data={CUISINES} renderItem={renderCuisineCard} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

CuisineSelectionScreen.navigationOptions = {
    headerTitle: 'Cuisines',
    headerStyle: {
        backgroundColor: Theme.primaryColor
    },
    headerTintColor: 'white'
}

export default CuisineSelectionScreen;
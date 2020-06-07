import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const CuisineSelectionScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Cuisine Select Screen!</Text>
            <Button title="Go to Menu" onPress={() => props.navigation.navigate('Menu')}/>
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

export default CuisineSelectionScreen;
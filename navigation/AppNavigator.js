import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CuisineSelectionScreen from '../screens/CuisineSelectionScreen'
import MenuScreen from '../screens/MenuScreen'
import ItemDetailScreen from '../screens/ItemDetailScreen'

const MenuNavigator = createStackNavigator({
    Cuisines: CuisineSelectionScreen,
    Menu: MenuScreen,
    Item: ItemDetailScreen
})

export default createAppContainer(MenuNavigator)
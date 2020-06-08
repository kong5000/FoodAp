import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CuisineSelectionScreen from '../screens/CuisineSelectionScreen'
import MenuScreen from '../screens/MenuScreen'
import ItemDetailScreen from '../screens/ItemDetailScreen'
import Theme from '../constants/Theme'

const navOptions = {
    headerStyle: {
        backgroundColor: Theme.primaryColor
    },
    headerTintColor: 'white'
}
const MenuNavigator = createStackNavigator({
    Cuisines: CuisineSelectionScreen,
    Menu: MenuScreen,
    Item: ItemDetailScreen
}, {
    defaultNavigationOptions: navOptions
})

export default createAppContainer(MenuNavigator)
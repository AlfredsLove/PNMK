import {NavigationContainer} from '@react-navigation/native'
import MainScreen from './screens/MainScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PartyDetailsScreen from './screens/PartyDetailScreen'
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main Menu">
                <Stack.Screen name="Main Menu" component={MainScreen} />
                <Stack.Screen name="Details" component={PartyDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;


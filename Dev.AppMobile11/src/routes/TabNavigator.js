import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaSobre from "../pages/TelaSobre";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={TelaHome} />
            <Tab.Screen name='Sobre' component={TelaSobre} />
        </Tab.Navigator>
    )
}
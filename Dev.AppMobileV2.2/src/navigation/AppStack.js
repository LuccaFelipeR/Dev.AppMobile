import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListaTarefas" component={ListaTarefas} />
            <Stack.Screen name="NovaTarefa" component={NovaTarefa} />


            
        </Stack.Navigator>

    )



}
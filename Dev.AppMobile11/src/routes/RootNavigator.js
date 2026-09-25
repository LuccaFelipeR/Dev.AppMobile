import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

import TelaDetalhe from "../routes/TelaDetalhe";

export default function RootNavigator(){
    return(
        <Stack.Navigator id='RootStack' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Principal" component={TabNavigator} />
            <Stack.Screen name="Detalhe" component={TelaDetalhe} />
        </Stack.Navigator>
    )

}
//Importando a navegação Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//importando as telas
import ListaTarefaScreen from '../screens/ListaTarefaScreen';
import NovaTarefaScreen from '../screens/NovaTarefaScreen';

//Instanciando um navegador Stack
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            component={ListaTarefaScreen}
            name="ListaTarefa"
            options={{title: "Minhas Tarefas"}} 
            />
            <Stack.Screen 
            name="NovaTarefa"
            component={NovaTarefaScreen}
            options={{ title:"Nova Tarefa"}} 
            />
        </Stack.Navigator>
    );
}
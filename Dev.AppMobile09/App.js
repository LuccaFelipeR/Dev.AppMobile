//Importando Navigation Container diretamente do core do React Navigation
import { NavigationContainer } from '@react-navigation/native';

//Importando o create que irá instanciar nossa navegação Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importando as telas que vou utilizar/navegar
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Login from './src/pages/Login';

//Instanciando um objeto de navegação do tipo Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Principal' component={Home} />
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

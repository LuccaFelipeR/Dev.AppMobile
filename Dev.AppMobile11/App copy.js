//Importando as bibluiotecas de navegação
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


//Instanciando a navegação Drawer
const Drawer = createDrawerNavigator();

//Importando as telas
import TelaHome from "./src/pages/TelaHome";
import TelaSobre from "./src/pages/TelaSobre";
import { Feather } from "@expo/vector-icons";


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#118ab2",
        drawerInactiveTintColor: "#21295C",
      
      }}
      >
        <Drawer.Screen
        name="Home"
        component={TelaHome} 
        options={{
          drawerIcon: ({color, size}) => (<Feather name="home" size={size} color={color} />)

        }} 
        />
        <Drawer.Screen
        name="Sobre"
        component={TelaSobre} 
        options={{
          drawerIcon: ({color, size}) => (<Feather name="info" size={size} color={color} />)

        }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


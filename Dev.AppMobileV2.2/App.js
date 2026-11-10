import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer as NaNavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";


export default function App() {
  return (
   <SafeAreaProvider>
    <NaNavigationContainer>
      <AppStack />
    </NaNavigationContainer>
   </SafeAreaProvider>
  );
}


import { View } from "react-native";
import TelaContador from "./src/pages/TelaContador";


export default function app(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TelaContador/>
        </View>
    )
}
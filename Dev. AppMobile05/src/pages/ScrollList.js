import { ScrollView, StyleSheet, View} from "react-native";
import Caixa from '../components/Caixa';


export default function ScrollList(){
    return(
        <View style={estilo.container}>
        <ScrollView style={estilo.scroll}>
            <Caixa texto="Caixa1" />
            <Caixa texto="Caixa2" />
            <Caixa texto="Caixa3" />
            <Caixa texto="Caixa4" />
            <Caixa texto="Caixa5" />
            <Caixa texto="Caixa6" />
            <Caixa texto="Caixa7" />
            <Caixa texto="Caixa8" />
            <Caixa texto="Caixa9" />
            <Caixa texto="Caixa10" />
        </ScrollView>
        </View>
        
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroudColor: '#adadad',
        paddingTop: 12,        
    },
    scroll:{
        flex: 1,
        width: '100%',
    }
})
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native";
import { View } from "react-native";

export default function Profile({navigation}){
    return (
        <View style={estilos.tela}>
            <Text style={estilos.texto}>Tela Profile</Text>
            <Button 
                title="Voltar"
                color="#118AB2"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: "#fff"
    },
    texto: {
        fontSize: 14,
        color: "#5b5b5b",
        textAlign: "center"
    }
})
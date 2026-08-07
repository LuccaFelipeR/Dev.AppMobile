import { View, Text, StyleSheet } from "react-native";

export default function LLZ(){
    return (
        <View style={estilo.container}>
            <Text>Sistema de gerenciamento de estoque!</Text>
        </View>
    )
}


export function LLZ2(){
    return (
        <View style={estilo.container}>
            <Text>Estoque Inteligente +9999k</Text>

        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        height: 40,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 20
    }
})
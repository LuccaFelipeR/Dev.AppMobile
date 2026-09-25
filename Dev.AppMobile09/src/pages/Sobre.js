import { Button, StyleSheet, Text, View } from "react-native";

export default function Sobre({navigation, route}){
    const {nome, dataCadastro} = route.params;

    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Tela Sobre</Text>
            <Text style={estilo.texto}>Essa tela foi empilhada sobre a Home</Text>
            <Button 
                title="Voltar"
                color="#5B5B5B"
                onPress={() => navigation.goBack()}
            />
            <Text style={estilo.texto}>Usuário logado: {nome} | Cadastrado em: {dataCadastro}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    titulo:{
        fontSize: 22,
        fontWeight: 'bold',
        color: "#21295C",
        marginBottom: 12
    },
    texto:{
        fontSize: 14,
        color: "#5B5B5B",
        textAlign: 'center',
        marginBottom: 24
    }
})
import { Button, StyleSheet, Text, View } from "react-native";

const USUARIO_LOGADO = {
    id: 1,
    nome: "Helton Azevedo",
    login: "hazevedo",
    dataCadastro: "01/01/2026"
}

export default function Home({ navigation }){
    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Bem vindo a Tela Principal</Text>
            <Text style={estilo.texto}>Essa é a primeira tela do APP</Text>
            <Button 
                title="Ir para sobre"
                color="#118AB2"
                onPress={() => navigation.navigate('Sobre', USUARIO_LOGADO)}
            />
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
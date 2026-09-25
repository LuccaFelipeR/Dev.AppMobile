import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Login({navigation}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function doLogin(){
        if((username === "hazevedo") && (password === "12345")){
            navigation.navigate("Principal")
        }
    }

    return(
        <View style={Estilo.container}>
            <View style={Estilo.card}>
                <Text style={Estilo.titulo}>Login</Text>
                <View style={Estilo.inputArea}>
                    <Text style={Estilo.label}>Username</Text>
                    <TextInput 
                        style={Estilo.inputs}
                        value={username}
                        onChangeText={setUsername}
                    />
                    
                    <Text style={Estilo.label}>Password</Text>
                    <TextInput 
                        style={Estilo.inputs}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={Estilo.botao}
                        onPress={doLogin}
                    >
                        <Text style={Estilo.textBotao}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F0C7C1",
        padding: 80
    },
    card:{
        backgroundColor: "#0A8F8C",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        borderRadius: 80
    },
    titulo:{
        marginTop: 20,
        fontSize: 46,
        color: "#BFEAF1"
    },
    inputs: {
        backgroundColor: "#D3D3D3",
        fontSize: 16,
        padding: 10,
        borderRadius: 20,
        width: '100%'

    },
    inputArea:{
        gap: 12
    },
    label: {
        color: "#7FD5E2"
    },
    botao:{
        marginTop: 20,
        backgroundColor: '#3D97D3',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textBotao: {
        color: "#B6E0F6"
    }
})
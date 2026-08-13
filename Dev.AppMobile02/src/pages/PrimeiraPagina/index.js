import {Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function PrimeiraPagina(){
    const lidarComClique = () => {
        alert('Botão clicado!');
    }
    
    
    return(
        <>
            <View style={estilo.container}>
                <Text style={estilo.textoPrincipal}>Página #01</Text>
                <Button
                    title="Botão 01"
                    color="#c7620f"
                    onPress={lidarComClique}                    
                ></Button>
                <TouchableOpacity
                    onPress={lidarComClique}
                >
                    <View style={estilo.botao}>
                        <Text style={estilo.textoBotao}>Botão #02</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )

}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    }, 
    textoPrincipal: {
        fontSize: 25,
        color: 'rgb(93, 204, 231)',
        fontWeight: '100'
    },
    textoBotao:{
        fontSize: 14,
        fontWeight: 400
    },
    botao:{
        marginTop: 12,
        width: 120,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f6164',
        borderRadius: 26,
    }
    
})
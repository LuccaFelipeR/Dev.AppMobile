import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";

const dadosForm = {
    nome: '',
    idade: '',
    senha: '',
    maisInfos: ''
}

export default function Home(){
    const [nomeestado, setNomeestado] = useState('');

    function aoDigitar(textoDigitado){
        console.log(`Texto digitado: ${textoDigitado}`);
        setNomeestado(textoDigitado);
        dadosForm.nome = textoDigitado;
    }

    function aoEnviar(){
        //Destructuring do objeto
        const {nome, idade, senha, maisInfos} = dadosForm;
        console.log('Formulário enviado!: ', {
            nome, 
            idade, 
            senha: '*'.repeat(senha.length),
            maisInfos
        });
        //chamada de backend passando 'dadosForm'
    }

    return(
        <View style={estilo.container}>
            <Text style={estilo.textao}>{nomeestado}</Text>
            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Nome</Text>
                <TextInput 
                    placeholder="Digite aqui o seu texto"
                    style={estilo.input}
                    onChangeText={aoDigitar}
                    value={nomeestado}
                />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Idade</Text>
                <TextInput 
                    style={estilo.input}
                    placeholder="Digite a idade"
                    onChangeText={(texto)=>(dadosForm.idade = texto)}
                    keyboardType="numeric"
                />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Senha</Text>
                <TextInput 
                    style={estilo.input}
                    placeholder="Digite a sua senha"
                    onChangeText={(texto)=>(dadosForm.senha = texto)}
                    secureTextEntry
                />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Fale mais sobre você</Text>
                <TextInput 
                    style={estilo.input}
                    placeholder="Conte mais sobre você"
                    onChangeText={(texto)=>(dadosForm.maisInfos = texto)}
                    multiline
                    maxLength={60}
                />
            </View>
            <Button 
                title="Enviar"
                color="#118AB2"
                onPress={aoEnviar}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#dadada',
        flexDirection: 'column',

    },
    containerInput:{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 12,
        marginStart: 8
    },
    input:{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        gap: 8
    },
    textao: {
        fontSize: 36
    }
})
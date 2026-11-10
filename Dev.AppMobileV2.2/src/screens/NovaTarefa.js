import { View, Text, ScrollView, TextInput } from 'react-native'
import { useState } from 'react'




export default function NovaTarefa({navigation}) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [enviando, setEnviando] = useState(false);

    async function saveTask() {
        if(titulo.trim()){
            console.log("Titulo da tarefa e obrigatorio");
            Alert.alert("Ops!", "Titulo da tarefa e obrigatorio");
        }
    }

    return (
        <ScrollView>
            <Text>Nova Tarefa</Text>

            <View>
                <Text>Titulo da Tarefa:</Text>
                <TextInput
                    placeholder="Ex.: Enviar e-mail para o cliente"
                    value={titulo}
                    onChangeText={setTitulo}
                />
            </View>

            <View>
                <Text>Descrição da Tarefa:</Text>
                <TextInput
                    placeholder="Ex.: Detalhar as necessidades do cliente"
                    value={descricao}
                    onChangeText={setDescricao}
                />
            </View>
            <TouchableOpacity>
                <Text>Salvar Tarefa</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => navigation.goBack() }
                >
                <Text>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

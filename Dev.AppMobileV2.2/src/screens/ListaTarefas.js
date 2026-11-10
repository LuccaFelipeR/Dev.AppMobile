import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { API_URL } from '../config/api'
import { useState } from 'react'


export default function ListaTarefas() {

    //Objeto que armazena as tarefas
    const [tasks, setTasks] = useState([]);

    //Interruptor que mostra se esta atualizando
    const [carregando, setCarregando] = useState(true);

    //Objeto para capturar erros
    const [erro, setErro] = useState(null);

    async function getTasks() {
        try {
            setErro(null);
            setCarregando(true);

            //Fazendo o GET na URL e salvando o resultado
            const resposta = await fetch(`${API_URL}tarefas`);

            //Se o servidor responder qualquer coisa diferente de 200, entra no IF e manda Erro.
            if(!resposta.ok) {
                throw new Error('O Servidor respondeu com erro: ${resposta.status}');
            }
          
            //converter a resposta do fetch em JSON
            const dados = await resposta.json();

            //Setando as tarefas no objeto tasks
            setTasks(dados);
        } catch (erro) {
            setErro(`Erro no getTasks: ${erro.message}`);
            console.error(`Erro no getTasks: ${erro.message}`);
        } finally {

            //Informando a aplicação que a carga de taks finalizou (com sucesso ou com erro)
            setCarregando(false);
        }
    }

    //Garante que sera executada uma unica vez a getTask quando a pagina é renderizada
    useEffect(() => {
        getTasks();
    }, []);
    
    if (carregando) {
        return (
            <View>
                <ActivityIndicator size="large" />
                <Text>Carregando tarefas...</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Lista de Tarefas</Text>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<Text>{item.titulo}</Text>)}
            />

            <TouchableOpacity
                onPress={ () => navigation.navigate('NovaTarefa') }
            >
                <Text>+ Nova Tarefa</Text>
            </TouchableOpacity>

        </View>
    )
}
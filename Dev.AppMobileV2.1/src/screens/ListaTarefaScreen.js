import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';

import { API_URL } from '../config/api';

export default function ListaTarefaScreen() {
    // Dados vindo da API
    const [filmes, setFilmes] = useState([]);
    // Interruptor para informar se já carregou
    const [carregando, setCarregando] = useState(true);
    // Erros
    const [erro, setErro] = useState(false);

    // Função ASSÍCRONA que obtem os dados da API
    async function getData() {
        try {
            setErro(null);
            const resposta = await fetch(`${API_URL}/movies.json`);

            if (!resposta.ok) {
                throw new Error('O servidor respondeu com erro: ' + resposta.status);
            }

            const dados = await resposta.json();
            setFilmes(dados);
            console.log('Dados vindo da API:', JSON.stringify(dados));
        } catch (error) {
            setErro(error.message);
        } finally {
            // informa a aplicação que foi finalizada a requisição
            setCarregando(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            <Text>Lista de Tarefas</Text>
        </View>
    );
}
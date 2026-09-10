import { FlatList } from "react-native";
import ItemContato from '../components/ItemContato';

const CONTATOS = [
    {id: '1', nome: 'Lucca Felipe', cargo: 'Analista de Dados', icone: 'bar-chart'},
    {id: '2', nome: 'Matheus Albertini', cargo: 'Administrador de Banco de Dados', icone: 'database'},
    {id: '3', nome: 'Abel Piassa', cargo: 'Desenvolvedor CyberSecurity', icone: 'shield'}, 
    {id: '4', nome: 'Calvin Gota', cargo: 'Desenvolvedor Back-End', icone: 'code'},
    
]




export default function Home2(){
    return(
        <FlatList 
            data={CONTATOS}
            keyExtractor={ (item) => item.id}
            renderItem={ ({item}) => <ItemContato contato={item} />}
        
        />
    )
}
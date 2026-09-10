import { FlatList, StyleSheet, Text, View } from "react-native"


const FRUTAS =[
    'Maçã', 
    'Banana', 
    'Laranja', 
    'Uva', 
    'Manga', 
    'Abacaxi', 
    'Ameixa', 
    'Kiwi', 
    'Morango', 
    'Tomate'
]

export default function Home() {
    return(
        <View style={estilos.container}>
            <Text style={estilos.textoPrincipal}>Listinha de Frutas</Text>
            <FlatList 
                data={FRUTAS}
                keyExtractor={ (item) => item }
                renderItem={({item}) => (<View style={estilos.linha}>
                    <Text style={estilos.texto}>{item}</Text>
                </View>)}
                    contentContainerStyle={estilos.conteudo}
            
            
            />


        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#733535",
        alignItems: 'center',
    },
    linha: {
        backgroundColor: '#d15c5c',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 3,
        borderColor: '#752c2cfb',
        alignItems: 'center',
    },
    texto: {
        fontSize: 16,
        color: '#000'
    },
    textoPrincipal:{
        fontSize: 23,
        paddingVertical: 5,
        color: '#fff',
        fontFamily: 'sans-serif',
        fontWeight: 'Bold'
    },
    conteudo: {
        paddingTop: 60
    }
})
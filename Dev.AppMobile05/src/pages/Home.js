import { StyleSheet, Text, View, Platform } from "react-native"


export default function Home(){
return(
    <View style={estilos.container}>
        <Text style={estilos.textoPrincipal}>Bem vindos ao sitema universal!</Text>
        <Text>{Platform.OS}</Text>
        <Text>{Platform.Version}</Text>
        <Text>{Platform.isMacCatalyst?'É':'Não' }</Text>

        <View style={estilos.caixaComSombra}>

        </View>
    </View>
    )

}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(9, 246, 234, 0.14)",
    },
    textoPrincipal: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgb(22, 114, 96)',

    },
    caixaComSombra:{
        backgroundColor: '#0e5e80',
        padding: 20,
        borderRadius: 12,
        width: '80%',
        ...Platform.select({
            ios:{
                shadowColor: '#00000079',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity:0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 6,
            }
        })
    }

})
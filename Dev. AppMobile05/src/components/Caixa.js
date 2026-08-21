import { StyleSheet, View, Text } from "react-native"



export default ({texto}) => (
    <View style={estilos.caixa}>
        <Text>{texto}</Text>
    </View>
)

const estilos = StyleSheet.create({
    caixa: {
        backgroundColor: '#7e1a1a',
        padding: 20,
        borderRadius: 12,
        width: '80%',
        marginBottom: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    }
})
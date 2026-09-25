import { Button, Text, View } from "react-native";
import {useState} from 'react';

export default function Contador(){
    const [valor, setValor] = useState(0);
    const [visivel, setVisivel] = useState(false);

    function incrementa(){
        console.log(`Valor atual: ${valor}`);
        setValor(valor + 1);
        console.log(`Novo valor: ${valor}`);
    }

    function decrementa(){
        setValor(valor > 0? valor - 1: 0);
    }

    function toogle(){
        setVisivel(!visivel);
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button 
                title="+"
                onPress={incrementa}
            />
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{valor}</Text>
            <Button 
                title="-"
                onPress={decrementa}
            />

            {visivel ? (<Text>Esse texto é um segredo!</Text>): false}            
            
            <Button 
                title={visivel ? 'Esconder': 'Mostrar'}
                onPress={toogle}
            />
        </View>
    )
}
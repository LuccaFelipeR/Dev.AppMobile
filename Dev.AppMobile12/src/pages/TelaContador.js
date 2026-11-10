import { useEffect, useState } from "react";
import { Text, View } from "react-native";


export default function TelaContador(){
    [contador, setContador] = useState(0);

    useEffect(()=>{
        console.log("Chamado o useEffect");
        setContador(contador +1);
    }, [])
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{contador}</Text>
        </View>
    )
}
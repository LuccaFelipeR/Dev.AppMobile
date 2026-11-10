import { Button, Text, View } from "react-native";


export default function Home({ navigation }) {
    
    return(
        <View>
            <Text>Pagina Home</Text>
            <Button
                title="Player"
                onPress={() => navigation.navigate("Playing")}
            />
        </View>
    )
}
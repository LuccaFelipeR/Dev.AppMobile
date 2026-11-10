import { Button, Text, View } from "react-native";

export default function Playing({navigation}) {
    return(
        <View>
            <Text>Tocando...</Text>
            <Button
                title="Voltar a Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}
import { StyleSheet, Text, View } from "react-native";


export default function Cabecalho() {

  return (

    <View style={styles.topBar}>

      <Text style={styles.topBarText}>
        Lucca Felipe
      </Text>

    </View>

  );

}


const styles = StyleSheet.create({

  topBar: {

    height: 130,
    backgroundColor: '#3d103e',
    width: '100%',

  },


  topBarText: {

    color: '#fffefe',
    marginTop: 50,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 19,

  },

});
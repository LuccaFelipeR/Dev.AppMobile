import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LLZ from './src/components/Llz';
import { LLZ2 } from './src/components/Llz';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!</Text>
      <Text> O Quanto você sabe sobre controle e analise?</Text>
      <Text style={styles.txtNegrito}>Você tem Ideia do problema que seu estoque tem?</Text>

      <View style={styles.txtJuntos}>
      <Text style={[styles.txtDiferente, styles.txtNegrito]}>LL</Text>
      <Text style={[styles.txtDiferente2, styles.txtNegrito]}>Z</Text>
      </View>
      
      <LLZ />
      <LLZ2 />

      <Text style={[styles.txtDiferente2, styles.txtNegrito]}>
        {10+20+15-5+30-12+9}
      </Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNegrito: { 
    fontWeight: 'bold',
    fontSize: 14, 
  },
  txtDiferente:{
    marginTop: 16,
    color: 'orange',
  },
  txtJuntos: {
    flexDirection: 'row',
  },

  txtDiferente2: {
    color: 'blue',
    marginTop: 16,
  }

});

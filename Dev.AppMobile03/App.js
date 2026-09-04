import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Caixa from './src/components/Caixa';

export default function App() {
  return (
    <>
    <View style={styles.containerPai}>
      <View style={styles.container}>
        <Caixa cor="rgb(14, 28, 20)" numero={1} />
        <Caixa cor="rgb(9, 61, 32)" numero={2} />
        <Caixa cor="rgb(25, 145, 79)" numero={3} />
        <Caixa cor="rgb(28, 181, 84)" numero={4} />
        <Caixa cor="rgb(6, 182, 205)" numero={5} />
        <Caixa cor="rgb(6, 132, 205)" numero={6} />
        <Caixa cor="rgb(26, 6, 205)" numero={7} />
        <StatusBar style="auto" />
      </View>

      <View style={styles.container2}>
        <Text>Container 2</Text>
      </View>

    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  containerPai:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#5e2121',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignSelf: 'flex-start'
    
  },
  container2:{
    flex: 4,
    backgroundColor: '#8c1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'auto'
  }
});

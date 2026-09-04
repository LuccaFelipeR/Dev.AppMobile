import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';

const ITENS_MENU = [
  { icone: 'user', texto: 'Meu Perfil' },
  { icone: 'settings', texto: 'Configurações' },
  { icone: 'bell', texto: 'Notificações' },
  { icone: 'log-out', texto: 'Sair' },
];

export default function App() {
  return (
    
    <View style={styles.container}>
      {
        ITENS_MENU.map((atual) => (
          <ItemMenu icone={atual.icone}
            texto={atual.texto}
            key={atual.texto}

          />
        )
        )
      }
      <Image 
      source={{uri:'https://images.ctfassets.net/3mv54pzvptwz/55YLwKPDnRXkqMBITRpWbC/0c2aefc04afa455c20e9ca0d209698e0/53174188191_42d4c831ae_o.jpg'}}
      style={styles.imagem}
      />

      <Image 

        source={require('/src/assets/image1.jpg')}
        style={styles.image}
      />

    </View>
  );
}

function ItemMenu({ icone, texto }) {
  return (
    <TouchableOpacity style={styles.linha}>
      <View style={styles.iconeCirculo}>
        <Feather name={icone} size={20} color='#e9af10' />
      </View>
      <Text style={styles.textoLinha}>{texto}</Text>
      <Feather name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    paddingHorizontal: 16,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#b3b0b0'
  },
  iconeCirculo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#118ab2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  textoLinha: {
    fontSize: 16,
    flex: 1,
  },
  imagem: {
    width:300,
    height:300,
    borderRadius: 150,
    alignSelf: 'center'
  }
});

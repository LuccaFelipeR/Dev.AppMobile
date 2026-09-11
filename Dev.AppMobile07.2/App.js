import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Lucca Felipe</Text>
      </View>


      <View style={styles.meioTela}>
        <View>
          <Text style={styles.saldo}>Saldo</Text>
          <Text style={styles.valorSaldo}>R$ 5.420,00</Text>
        </View>

        <View>
          <Text style={styles.gastos}>Gastos</Text>
          <Text style={styles.valorGastos}>R$ 1.250,00</Text>
        </View>
      </View>

      <View style={styles.menu}>

        <TouchableOpacity>
          <View style={styles.botaoMenu}>
            <Ionicons name="wallet-outline" size={28} color="#333" />
            <Text>Carteira</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.botaoMenu}>
            <Ionicons name="pricetag-outline" size={28} color="#333" />
            <Text>Cupons</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.botaoMenu}>
            <Ionicons name="card-outline" size={28} color="#333" />
            <Text>Cartão</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.botaoMenu}>
            <Ionicons name="barcode-outline" size={28} color="#333" />
            <Text>Boleto</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.botaoMenu}>
            <Ionicons name="settings-outline" size={28} color="#333" />
            <Text>Config</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.content}>
        <Text style={styles.tituloLancamentos}>
          Últimos lançamentos
        </Text>


        <View style={styles.lancamento}>
          <View>
            <Text style={styles.nomeLancamento}>
              Mercado
            </Text>
            <Text style={styles.descricaoLancamento}>
              Compra supermercado
            </Text>
          </View>
          <Text style={styles.valorSaida}>
            - R$ 220,00
          </Text>
        </View>

        <View style={styles.lancamento}>
          <View>
            <Text style={styles.nomeLancamento}>
              Steam
            </Text>
            <Text style={styles.descricaoLancamento}>
              Compra FC26
            </Text>
          </View>
          <Text style={styles.valorSaida}>
            - R$ 129,00
          </Text>

        </View>

        <View style={styles.lancamento}>
          <View>
            <Text style={styles.nomeLancamento}>
              Kabum
            </Text>
            <Text style={styles.descricaoLancamento}>
              Compra Online
            </Text>
          </View>
          <Text style={styles.valorSaida}>
            - R$ 370,00
          </Text>
        </View>


        <View style={styles.lancamento}>
          <View>
            <Text style={styles.nomeLancamento}>
              Salário
            </Text>
            <Text style={styles.descricaoLancamento}>
              Pagamento empresa
            </Text>
          </View>
          <Text style={styles.valorEntrada}>
            + R$ 3.500,00
          </Text>
        </View>

      </View>

      <TouchableOpacity>
        <View> 
            <Text>Mostrar Mais</Text>
        </View>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

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

  content: {
    marginTop: 20,
    width: '90%',
  },

  meioTela: {
    marginTop: -30,
    width: '90%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  saldo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  gastos: {
    fontSize: 16,
    color: '#666',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
  },
  botaoMenu: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f0f0f0",
    borderRadius: "50%",
    marginTop: 7

  },
  tituloLancamentos:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'

  },lancamento: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 15,

   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  }, nomeLancamento: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold"

  },descricaoLancamento: {
    fontSize: 13,
    color: "#777"
  
  },valorEntrada: {
    color: "#0b870d",
    fontWeight: "bold",

  },valorSaida: {
    color: "#fb1f1f",
    fontWeight: "bold"
  }
  
});

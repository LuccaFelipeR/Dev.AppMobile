import { StyleSheet, Text, View } from "react-native";


export default function ResumoFinanceiro() {

  return (

    <View style={styles.meioTela}>

      <View>

        <Text style={styles.saldo}>
          Saldo
        </Text>

        <Text style={styles.valorSaldo}>
          R$ 5.420,00
        </Text>

      </View>


      <View>

        <Text style={styles.gastos}>
          Gastos
        </Text>

        <Text style={styles.valorGastos}>
          R$ 1.250,00
        </Text>

      </View>

    </View>

  );

}


const styles = StyleSheet.create({

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


  valorSaldo: {

    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',

  },


  valorGastos: {

    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',

  },

});
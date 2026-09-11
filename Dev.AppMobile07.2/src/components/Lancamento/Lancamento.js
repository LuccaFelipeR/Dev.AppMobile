import { StyleSheet, Text, View } from "react-native";


export default function Lancamento() {

  return (

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

  );

}



const styles = StyleSheet.create({

  content: {

    marginTop: 20,
    width: '90%',

  },


  tituloLancamentos: {

    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'

  },


  lancamento: {

    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },


  nomeLancamento: {

    color: "#333",
    fontSize: 16,
    fontWeight: "bold"

  },


  descricaoLancamento: {

    fontSize: 13,
    color: "#777"

  },


  valorEntrada: {

    color: "#0b870d",
    fontWeight: "bold",

  },


  valorSaida: {

    color: "#fb1f1f",
    fontWeight: "bold"

  }

});
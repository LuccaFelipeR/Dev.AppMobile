import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function MenuAtalho() {

  return (

    <View style={styles.menu}>


      <TouchableOpacity>

        <View style={styles.botaoMenu}>

          <Ionicons 
            name="wallet-outline"
            size={28}
            color="#333"
          />

          <Text>
            Cofrinho
          </Text>

        </View>

      </TouchableOpacity>



      <TouchableOpacity>

        <View style={styles.botaoMenu}>

          <Ionicons 
            name="pricetag-outline"
            size={28}
            color="#333"
          />

          <Text>
            Cupons
          </Text>

        </View>

      </TouchableOpacity>



      <TouchableOpacity>

        <View style={styles.botaoMenu}>

          <Ionicons 
            name="card-outline"
            size={28}
            color="#333"
          />

          <Text>
            Cartão
          </Text>

        </View>

      </TouchableOpacity>



      <TouchableOpacity>

        <View style={styles.botaoMenu}>

          <Ionicons 
            name="barcode-outline"
            size={28}
            color="#333"
          />

          <Text>
            Boleto
          </Text>

        </View>

      </TouchableOpacity>



      <TouchableOpacity>

        <View style={styles.botaoMenu}>

          <Ionicons 
            name="settings-outline"
            size={28}
            color="#333"
          />

          <Text>
            Config
          </Text>

        </View>

      </TouchableOpacity>


    </View>

  );

}


const styles = StyleSheet.create({

  menu: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'

  },


  botaoMenu: {

    width: 60,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',

  }

});
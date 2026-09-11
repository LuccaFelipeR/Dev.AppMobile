import { View, StyleSheet } from "react-native";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import ResumoFinanceiro from "../../components/ResumoFinanceiro/ResumoFinanceiro";
import MenuAtalho from "../../components/MenuAtalho/MenuAtalho";
import Lancamento from "../../components/Lancamento/Lancamento";


export default function Inicio() {

  return (

    <View style={styles.container}>

      <Cabecalho />

      <ResumoFinanceiro />

      <MenuAtalho />

      <Lancamento />

    </View>

  );

}


const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },

});
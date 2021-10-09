import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')
  const [ativo, setAtivo] = useState(false)

  const arrayFrases = [
    "Isso aí é só fonte", 
    "É somente o sensor", 
    "Precisa acertar o ceéfolpe", 
    "Marlon burro", 
    "Está com erro no sintegra", 
    "Registro pai sem fodasse registro filho equivalente", 
    "OI\nME AJUDA\nNÃO\nCONSIGO\nEMITIR\nNOTA", 
    "O pessoal do financeiro está com um problema seríssimo no financeiro",
    "Qual seu horário de saída? às 17hrs ou 18hrs?",
    "Intendi...",
    "Seu horário de entrada é as 8hrs, mas resolva um problema para mim as 6:40??",
    "Você desconfigurou minhas impressoras",
    "KB5005565 (Windows 10 1909)",
    "Poderia verificar se tem venda sem financeiro?",
    "Você é meu colírio s2",
    "Não gosto de computador...",
    "update cliente set nome='FULANO DE TAL';",
    "Pedi pra sair, não aguenta a pressão?",
  ]

  function quebraBiscoito(){
    setImg(require('./src/biscoitoAberto.png'))
    setTextoFrase('" '+ arrayFrases[(Math.random() * arrayFrases.length).toFixed(0)]+ ' "')
    setAtivo(true)
  }

  function reiniciaBiscoito(){
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
    setAtivo(false)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={img} 
        style={styles.img}
      />

      <Text style={styles.textoFrase} >{textoFrase}</Text>

    {
      ativo ? null :
      <TouchableOpacity disabled={ativo} style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar biscoito
          </Text>
        </View>
      </TouchableOpacity>

    }

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]} onPress={reiniciaBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>
            Reiniciar biscoito
          </Text>
        </View>
      </TouchableOpacity>

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
  img:{
    width: 230,
    height: 230
  },
  textoFrase:{
    fontSize: 20,
    color: "#dd7d22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: "#dd7d22",
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7d22"
  }
});

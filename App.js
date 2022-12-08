import React, {useState} from 'react';
import {View,Text, TextInput,StyleSheet, Image, TouchableOpacity} from 'react-native';

let frases = [
  "Você enfrentará muitas derrotas na vida, mas nunca se deixe ser derrotado.",
  "A maior glória de viver não está em nunca cair, mas em nos levantar toda vez que caímos.",
  "No final das contas, não são os anos de sua vida que contam. É a vida em seus anos.",
  "Eu quero sentir a minha vida enquanto eu estou nela.",
  "O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim terás o que colher.",
  "A vida é a arte do encontro, embora haja tanto desencontro pela vida.",
  "O sucesso geralmente vem para aqueles que estão ocupados demais para procurá-lo",
  "O verdadeiro teste não é se você evitará esse fracasso, porque não o fará. É se você deixa que isso endureça ou envergonhe-o pela inércia, ou se você aprende com ele; se você escolhe perseverar.",
  "A maneira de começar é parar de falar e começar a fazer.",
  "Você sabe que está no caminho do sucesso se fizer o seu trabalho e não for pago por ele.",
  "Primeiro, tenha um ideal prático definido e claro; uma meta, um objetivo. Segundo, tenha os meios necessários para atingir seus fins; sabedoria, dinheiro, materiais e métodos. Terceiro, ajuste todos os seus meios para esse fim"
]

export default function App(){
  const [frase,setFrase] = useState('');
  const [imagem,setImagem] = useState(require('./src/biscoito.png'));

  function quebrarBiscoito(){
    setFrase(frases[Math.floor(Math.random()*frases.length)])
    setImagem(require('./src/biscoitoAberto.png'))
  }
  function reiniciarBiscoito(){
    setFrase('')
    setImagem(require('./src/biscoito.png'));
  }
  return (
    <View style={styles.container}>
      <Image style={{height:200,width:200,marginBottom: 20}} source={imagem}/>
      <Text style={styles.fraseText}>{frase}</Text>
      
      <TouchableOpacity onPress={()=>quebrarBiscoito()} style={[styles.buttons,{marginTop:15}]}>
        <View  style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> reiniciarBiscoito()} style={[styles.buttons, {marginTop:10,borderColor:'black'}]}>
        <View  style={styles.btnArea}>
          <Text style={[styles.btnText,{color:'black'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white'
  },
  fraseText:{
    height:40,
    textAlign:'center',
    marginHorizontal: 40,
    color:'#f94144',
    fontStyle:'italic'
  },
  buttons:{
    height:50,
    width:190,
    borderColor:'red',
    borderRadius: 20,
    borderWidth:3
  },
  btnArea:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  btnText:{
    fontSize:17,
    color:'#f94144',
    fontWeight:'bold'
  }
})


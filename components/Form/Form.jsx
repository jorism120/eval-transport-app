import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Form() {
  const [type, setType] = useState('');
  const [lieux, setLieux] = useState('');

  function handleCreate() {

    console.log("créé")
    
  }



  return (
    <View style={{backgroundColor:'#0E1125', height:'100%'}}>
      <View style={styles.main}>
        <Text style={styles.title}>Création d'un obstacle</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Type d'obstacle</Text>
          <TextInput style={styles.input}
            onChangeText={setType}
          ></TextInput>
          <Text style={styles.label}>Lieux</Text>
          <TextInput style={styles.input} 
          onChangeText={setLieux}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.btnValid} onPress={handleCreate}>
          <Text style={styles.text}>AJOUTER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.blocLogo}>
        <Image
          source={ require('../../assets/images/react-logo.png') } 
          style={styles.img}
        />
      </View>
    </View>
  );
}


export const styles = StyleSheet.create({
    main : {
      margin:10,
      marginTop:70,
      height:'60%',
      backgroundColor:'#EFF2F7',
      flexDirection:'column',
      alignItems:'center',
      borderRadius:10
    },
    text: {
      color:"white",
      textAlign:'center',
      fontWeight:'semibold',
      fontSize:18
    },

    form: {
      padding:10,
      width:"100%",
      height:"100%"
    },

    label: {
      fontWeight:'600',
      fontSize:16,
      color:'#12182F'
    },
    input: {
      height:50,
      backgroundColor:"white",
      borderRadius:10,
      marginBottom:15
    },

    btnValid: {
      position:"relative",
      top:-250,
      backgroundColor:"#FF5B32",
      height:60,
      width:140,
      borderRadius:40,
      alignItems:"center",
      justifyContent:"center"
    },
    title:{
      color:'#CE5E2B',
      fontSize:28,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:20,
      marginBottom:50
    },

    blocLogo : {
      height:150,
      width:'100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },

    img: {
      width: 90, 
      height: 90, 
      resizeMode: 'contain',
    }
});
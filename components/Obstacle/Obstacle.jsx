import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
//import styles from './Obstacle.style';

export default function Obstacle() {
  const [listObs, setListObs] = useState([]);

  const data = [
    { idObs: 1, typeObs: 'Poteau', lieux: 'Rue Lafayette' },
    { idObs: 2, typeObs: 'Trou', lieux: 'Boulevard Haussmann' },
    { idObs: 3, typeObs: 'Débris', lieux: 'Avenue de Clichy' },
  ];

  useFocusEffect(
    useCallback(() => {
      setListObs(data);
    }, [])
  );

  return (
    <View style={{ backgroundColor: '#0E1125', height: '100%' }}>
      <Text style={styles.title}>Liste des obstacles à venir</Text>
      <View style={styles.main}>
        <ScrollView style={styles.list}>
          {listObs.map((obs) => (
            <TouchableOpacity key={obs.idObs} style={styles.elems}>
              <Image
                source={require('../../assets/images/react-logo.png')}
                style={styles.img}
              />
              <View style={styles.textDetail}>
                <Text
                  style={{
                    color: '#12182F',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 12,
                  }}
                >
                  {obs.typeObs}
                </Text>
                <Text
                  style={{
                    color: '#12182F',
                    fontSize: 14,
                    fontWeight: '500',
                    marginLeft: 12,
                  }}
                >
                  {obs.lieux}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main : {
      margin:10,
      paddingTop:10,
      height:'90%',
      backgroundColor:'#EFF2F7',
      flexDirection:'column',
      alignItems:'center',
      borderRadius:10
    },
    elems: {
      height:125,
      width:'95%',
      marginLeft:"2.5%",
      marginRight:"2.5%",
      backgroundColor: 'white',
      marginTop:5,
      marginBottom:5,
      borderRadius: 10,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center'
    },
    text: {
        color:"white",
        textAlign:'center',
        fontWeight:'bold'
    },
    title:{
      color:'white',
      fontSize:22,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:10,
    },
    img: {
      marginLeft:10,
      width: 80, 
      height: 70, 
      resizeMode: 'cover',
      borderRadius:10
    },

    textDetail:{
        flexDirection:'column',
        width:"65%"
    },
    check: {
        position:'relative',
        height:25,
        width:25,
    },
    list: {
        width:"100%",
        height:"100%",
    },
    blocCheck :{
        width:"35%",
    }
});

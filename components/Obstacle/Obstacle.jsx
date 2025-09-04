import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';

export default function Obstacle() {
  const [listObs, setListObs] = useState([]);

  const data = [
    {
      idObs: 1,
      typeObs: 'Poteau',
      lieux: 'Rue Lafayette',
      latitude: 48.8753,
      longitude: 2.3501,
    },
    {
      idObs: 2,
      typeObs: 'Trou',
      lieux: 'Boulevard Haussmann',
      latitude: 48.8748,
      longitude: 2.3319,
    },
    {
      idObs: 3,
      typeObs: 'Débris',
      lieux: 'Avenue de Clichy',
      latitude: 48.8896,
      longitude: 2.3266,
    },
  ];

  const initData = async () => {
    try {
      const existingData = await AsyncStorage.getItem('obstacles');
      if (!existingData) {
        await AsyncStorage.setItem('obstacles', JSON.stringify(data));
      }
    } catch (error) {
      console.error("Erreur lors de l'initialisation des données :", error);
    }
  };

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('obstacles');
      if (storedData) {
        const parsed = JSON.parse(storedData).map(obs => ({
          ...obs,
          latitude: obs.latitude ? Number(obs.latitude) : null,
          longitude: obs.longitude ? Number(obs.longitude) : null,
        }));
        setListObs(parsed);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des données :", error);
    }
  };


  const removeObstacle = async (idObsToRemove) => {
    try {
      const updatedList = listObs.filter((item) => item.idObs !== idObsToRemove);
      setListObs(updatedList);
      await AsyncStorage.setItem('obstacles', JSON.stringify(updatedList));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      initData().then(loadData);
    }, [])
  );


  return (
    <View style={{ backgroundColor: '#0E1125', height: '100%' }}>
      <Text style={styles.title}>Liste des obstacles à venir</Text>
      <View style={styles.main}>
        <ScrollView style={styles.list}>
          {listObs.map((obs) => (
            <View key={obs.idObs} style={styles.elems}>
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
                                <Text
                  style={{
                    color: '#12182F',
                    fontSize: 14,
                    fontWeight: '500',
                    marginLeft: 12,
                  }}
                >
                  Lat : {obs.latitude ?? 'N/A'} Lon : {obs.longitude ?? 'N/A'}
                </Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => removeObstacle(obs.idObs)}>
                  <Image
                    source={require('../../assets/images/close.png')}
                    style={styles.imgBtn}
                  />
              </TouchableOpacity>
            </View>
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
      height:'70%',
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
    imgBtn: {
      width: 40, 
      height: 40, 
      resizeMode: 'cover',
    },

    textDetail:{
      flexDirection:'column',
      width:"65%"
    },
    list: {
      width:"100%",
      height:"100%",
    },
    button : {
      marginRight:100,
    }
});

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

export default function Contact() {
  const [listContact, setListContact] = useState([]);

  const data = [
    { id: 1, nom: 'Jean Pierre', numero: '06 34 67 89 09' },
    { id: 2, nom: 'Marc', numero :'06 34 67 89 09' },
    { id: 3, nom: 'JP', numero: '06 34 67 89 09' },
  ];

  useFocusEffect(
    useCallback(() => {
      setListContact(data);
    }, [])
  );

  return (
    <View style={{ backgroundColor: '#0E1125', height: '100%' }}>
      <Text style={styles.title}>Contacts</Text>
      <View style={styles.main}>
        <ScrollView style={styles.list}>
          {listContact.map((contact) => (
            <View key={contact.id} style={styles.elems}>
              <Image
                source={require('../../assets/images/phone.png')}
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
                  {contact.nom}
                </Text>
                <Text
                  style={{
                    color: '#12182F',
                    fontSize: 14,
                    fontWeight: '500',
                    marginLeft: 12,
                  }}
                >
                  {contact.numero}
                </Text>
              </View>
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
      height:'90%',
      backgroundColor:'#EFF2F7',
      flexDirection:'column',
      alignItems:'center',
      borderRadius:10
    },
    elems: {
      height:80,
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

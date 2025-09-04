import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function Form() {
  const [type, setType] = useState('');
  const [lieux, setLieux] = useState('');

  async function handleCreate() {
    if (!type || !lieux) {
      Alert.alert('Champs requis', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      const existingData = await AsyncStorage.getItem('obstacles');
      const parsedData = existingData ? JSON.parse(existingData) : [];

      const newId = parsedData.length > 0
        ? Math.max(...parsedData.map(o => o.idObs)) + 1
        : 1;

      const newObstacle = {
        idObs: newId,
        typeObs: type,
        lieux: lieux
      };
      const updatedData = [...parsedData, newObstacle];
      await AsyncStorage.setItem('obstacles', JSON.stringify(updatedData));
      Alert.alert('Succès', 'Obstacle ajouté avec succès !');
      setType('');
      setLieux('');
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'obstacle :", error);
      Alert.alert("Erreur", "Impossible d'ajouter l'obstacle.");
    }
  }

  return (
    <View style={{ backgroundColor: '#0E1125', height: '100%', marginTop:50 }}>
      <View style={styles.main}>
        <Text style={styles.title}>Création d'un obstacle</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Type d'obstacle</Text>
          <TextInput
            style={styles.input}
            value={type}
            onChangeText={setType}
            placeholder="Ex: Poteau"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.label}>Lieux</Text>
          <TextInput
            style={styles.input}
            value={lieux}
            onChangeText={setLieux}
            placeholder="Ex: Rue de Paris"
            placeholderTextColor="#ccc"
          />
        </View>
        <TouchableOpacity style={styles.btnValid} onPress={handleCreate}>
          <Text style={styles.text}>AJOUTER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.blocLogo}>
        <Image
          source={require('../../assets/images/react-logo.png')}
          style={styles.img}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 20,
    padding: 20,
    backgroundColor: '#EFF2F7',
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#12182F',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#12182F',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  btnValid: {
    backgroundColor: '#0E1125',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  blocLogo: {
    alignItems: 'center',
    marginTop: 30,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

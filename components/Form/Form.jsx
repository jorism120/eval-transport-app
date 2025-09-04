import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Form() {
  const [type, setType] = useState('');
  const [lieux, setLieux] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission refusée', "Impossible d'accéder à la localisation.");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude.toString());
        setLongitude(location.coords.longitude.toString());
      } catch (error) {
        console.error('Erreur localisation :', error);
        Alert.alert('Erreur', "Impossible de récupérer la localisation.");
      }
    })();
  }, []);

  async function handleCreate() {
    if (!type || !lieux || !latitude || !longitude) {
      Alert.alert('Champs requis', 'Veuillez remplir tous les champs.');
      return;
    }
    const latNum = parseFloat(latitude.replace(',', '.'));
    const lonNum = parseFloat(longitude.replace(',', '.'));
    if (isNaN(latNum) || isNaN(lonNum)) {
      Alert.alert('Coordonnées invalides', 'Veuillez entrer des coordonnées valides.');
      return;
    }
  }

  return (
    <View style={{ backgroundColor: '#0E1125', height: '100%', marginTop: 50 }}>
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
          <Text style={styles.label}>Latitude</Text>
          <TextInput
            style={styles.input}
            value={latitude}
            onChangeText={setLatitude}
            placeholder="Ex: 48.8566"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
          />
          <Text style={styles.label}>Longitude</Text>
          <TextInput
            style={styles.input}
            value={longitude}
            onChangeText={setLongitude}
            placeholder="Ex: 2.3522"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
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

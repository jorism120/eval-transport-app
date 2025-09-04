import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Obstacle from '../../components/Obstacle/Obstacle';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Obstacle />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1125', 
    paddingTop: 10, 
  },
});

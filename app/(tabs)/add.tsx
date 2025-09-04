import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Form from '../../components/Form/Form';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Form/>


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
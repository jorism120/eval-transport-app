
import { StyleSheet, View } from 'react-native';
import Contact from '../../components/Contact/Contact';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Contact/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1125', 
    paddingTop: 10, 
  },
});



import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function ButtonAdd() {


  return (
    <View style={styles.main}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/add')}> 
            <Text>Ajouter un obstacle</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    main : {
      top:-135,
      height:100,
      justifyContent:'center',
      alignItems:'center'
    },
    button : {
        height:50,
        width:250,
        backgroundColor:"orange",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    }
});

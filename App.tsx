import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,Dimensions,Image,StyleSheet,FlatList, TextInput
} from 'react-native';
import Veriler from './src/data/veri.json';
import Urunler from './src/Urunler';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const urunler = ({item}: {item: any}) => <Urunler urunler={item}></Urunler>;
  const keyExtractor =(item: any) => item.id.toString();
  return (
   <SafeAreaView style={styles2.container}>
      <Text style={styles2.baslik_text}>PATIKASTORE</Text>
      
      <TextInput
        style={styles2.input}
        placeholder="Search..."
      />
  
      <FlatList
        data={Veriler}
        keyExtractor={keyExtractor}
        renderItem={urunler} numColumns={2} horizontal={false}></FlatList>
    </SafeAreaView>
  );
}
const styles2 = StyleSheet.create({
  container: { flex:1, backgroundColor: 'white',  },
  baslik_text: {
    color: '#A020F0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
  },
  input:{
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

});

export default App;

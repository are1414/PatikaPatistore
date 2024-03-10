import {StyleSheet, Dimensions} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 20,    
    backgroundColor: '#eceff1',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 1,
    borderRadius: 5,
    margin:7.5,

  },
  body: {padding: 10, margin: 10, borderRadius: 10},
  title: {fontSize: 20, fontWeight: 'bold', color: 'black',paddingStart: 10},
  text: {fontSize: 16, color: 'black', marginTop: 5 , paddingStart: 10},
  button_container: {
    backgroundColor: '#00C2FF',
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
  },
  button_text: {fontSize: 16, color: 'white', fontWeight: 'bold'},
  images: {
    height: Dimensions.get('window').height / 5,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    padding:10,
    margin:10
  },
  inner_container: {
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
  },  
    stok: {fontSize: 20, color: 'red', padding: 10, fontWeight: 'bold'},   
});

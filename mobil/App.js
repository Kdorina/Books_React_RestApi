import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const url = 'http://localhost:3000/books';

  const [books, setBooks] = useState([]);

  function handle(){
    fetch(url).then(rest => rest.json()).then(data =>{
      setBooks(data);
    }).catch(error=>{
      alert('Hiba:'+ error);
    })
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <FlatList data={books} renderItem={({item}) => (
         <Text>{item.title}</Text>
      )}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

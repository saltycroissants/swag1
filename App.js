import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Blocks from './components/Blocks'

const App = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text} > Hello World</Text> 
      <Blocks />
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
    paddingTop : 60
  },
  text : {
    color : 'orange' ,
    fontSize : 20,
  }
});

export default App;

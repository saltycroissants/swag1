import React from 'react';
import {View, Text, StyleSheet ,ScrollView} from 'react-native';
import Block from './components/Block'
import Date from './components/Date'
import MainBlock from './components/MainBlock'

const App = () => {
  return (
    <View style = {styles.container}>
      <View style = {{flex :1}}>
        <Text style = {styles.text}> 오늘 날짜가 들어갈 곳</Text>
      </View>
      <View style = {{flex : 2}} >
      <ScrollView style = {styles.blocks} horizontal = {true}>
        <Block />
        <Block /> 
        <Block />
      </ScrollView>
      </View>
      <View style = {styles.any}>
        <MainBlock />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    paddingTop : 60,
    //backgroundColor : 'red'
  },
  text : {
    paddingTop : 30,
    fontSize : 30,
    backgroundColor : 'yellow'
  },
  blocks : {
    //backgroundColor : 'green'
  },
  any :{
    flex : 4,
    //backgroundColor : 'orange'
  }
});

export default App;

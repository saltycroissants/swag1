import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainBlock = () => {
    return(
        <View style = {styles.mainBlock} >
        </View>)
}

const styles = StyleSheet.create({
    mainBlock :{
        aspectRatio: 0.8,
        backgroundColor : 'purple',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
});

export default MainBlock;
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
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34
    }
});

export default MainBlock;
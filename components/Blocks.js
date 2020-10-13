import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';

const Blocks = () => {
    return (
        <ScrollView style = {styles.blocks} horizontal = {true}>  
            <Text style = {styles.text}> 
            Insixsvhbjknlm;kjhvkljlkhvkljkhjklkbhjlkbhde Blocks horiiiririririririri 
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    blocks : {
        flex :1
    },
    text : {
        fontSize :20
    }
})

export default Blocks;
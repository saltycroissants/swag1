import React, {useState, useEffect} from 'react'; 
import {View,Text} from 'react-native';

const Date = () => {
    return (
        <View>
            <Text> {getCurrnetDate}</Text>
        </View>    
    )
}

const getCurrnetDate = () =>{
    let date = new Date().getDate();
    return date.toString()
}
export default Date;
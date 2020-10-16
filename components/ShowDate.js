import React, {useState, useEffect} from 'react'; 
import {View,Text, StyleSheet} from 'react-native';

const ShowDate = () => {
    const today = new Date().getDate();
    const [date, setDate] = useState(today);
    
    //console.log(today);
    
    return (
        <View>
            <Text style = {styles.text}> 오늘은 {date} 일</Text>
        </View>    
    )
}
const styles = StyleSheet.create({
    text : {
        fontSize : 30
    }
})

export default ShowDate;
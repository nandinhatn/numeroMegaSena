import React from "react";
import {Text, Pressable, Button, StyleSheet} from 'react-native'



export default props=>{
 return (
    <>
    <Button title="clique" onPress={props.onPress}/>
   
    </>
 )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor : '#EB0876',
        padding: 10,
        borderRadius: 15
    },
    Text:{
        color: 'white',
        fontSize:20
    }
})


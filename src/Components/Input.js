import React  from "react";
import {Text, TextInput,StyleSheet} from 'react-native'



export default props=>{
    return(
        <TextInput
         keyboardType="numeric" 
        style={styles.Input} 
       
        placeholder="Digite um numero"
        onChangeText={props.onChangeText}
        />
    )
}


const styles = StyleSheet.create({
    Input:{
        fontSize: 20,
        borderBottomWidth: 2,
       
    }
})

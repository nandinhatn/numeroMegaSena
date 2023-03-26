import React ,{useState, useRef, useEffect} from "react";
import {Text, View, SafeAreaView, StyleSheet } from 'react-native'
import Item from './src/Components/Item'
import Input from "./src/Components/Input";
import Button from './src/Components/Button'


export default props =>{
     

  
    const [qtdNumeros, setQtdNumeros] = useState('0')
    const [sortNumbers, setSortNumbers] = useState([])
    const [items ,setItems] = useState([])
   let itemExib =[]
   
    let numbers=[]

 
 

    useEffect(()=>{
         
         return user()
    },[numbers, sortNumbers])

     const gerarNumeros =()=>{
        numbers =[]
        for(let i=0; i< qtdNumeros; i++){
            numbers.push( Math.floor(Math.random()*60+ 1))
        }
        setSortNumbers(numbers)
        
        
     }
 
     const criarNumero = (array)=>{
         return array.map((item,i)=>{
            return <Item key={i} num={item} />
         })
     }
     const user = ()=>{

     }

    
    
    return(
        <>
        <SafeAreaView style={styles.Container}>
        <Text style={styles.Text}>Sorteando os números MegaSena</Text>
        <Text style={styles.TextMin}>Quantidade de Números : {qtdNumeros}</Text>
    

        <Input value={`${qtdNumeros}`} onChangeText={(numero)=> setQtdNumeros(numero)}/>
       <Text>
      {criarNumero(sortNumbers)}
      

       </Text>
        <Button onPress={()=>gerarNumeros()}/>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    Container : {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 20
    },
    Text:{
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
    TextMin:{
        fontSize: 20,
        color: 'black'

    }
})

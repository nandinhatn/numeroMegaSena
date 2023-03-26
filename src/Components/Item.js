import React from 'react'
import {Text, SafeAreaView,StyleSheet,View} from 'react-native'


export default props=>{
    return(<>
    <View style={styles.Item}>


        <Text style={styles.Text}>{props.num}</Text>
    </View>
        
    </>
    )
}

const styles = StyleSheet.create({
    Item:{
        backgroundColor: '#6E4376',
        width: 50,
        height: 50,
        borderRadius: 50,       
        alignItems: 'center',                
        justifyContent:'center'
        
    },
    Text:{
        color: '#FFFF',
        fontSize: 20
    }
})
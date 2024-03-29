import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Gradientcomponent from '../../components/Gradient.components'

export default function AppEntryPage({navigation}) {
  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#7697ff'}}>
        <Gradientcomponent/>
        <View style={{backgroundColor:'white', width:130, height:130,borderRadius:100, justifyContent:'center',alignItems:'center'}}>
            {/* <Text style={{fontSize:15, textAlign:'center', color:'#7697ff', elevation:5,fontFamily:'Poppins_700Bold' }}>Safe Space</Text> */}
            <Image source={require("../../assets/adaptive-icon.png")} style={{ width:80, height:80 }} />
        </View>
        <View style={{position:'absolute', height:'100%', width: '100%', alignItems:'center',justifyContent:'flex-end',padding:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={[styles.btn,{backgroundColor:'white'}]}>
                <Text style={[styles.btntext]}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={[styles.btn]}>
                <Text style={[styles.btntext,{color:'white'}]}>Sign In</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
        width:'100%',
        borderColor:'white',
        borderWidth:1,
        borderRadius:50,
        height: 50,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
    },
    btntext:{
        fontSize:14,
        fontFamily:'Poppins_700Bold',
        color:'#7697ff'
    }
})
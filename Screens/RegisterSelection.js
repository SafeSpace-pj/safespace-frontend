import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native-paper'
import FormsStyles from '../styles/Forms.styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = () => {
  const [Email, setEmail] = useState('')
  const [PAssword, setPAssword] = useState('')
  const [Fullname, setFullname] = useState('')
  const [Phonenumber, setPhonenumber] = useState('')
  const [Gender, setGender] = useState('')
  return (
    <Pressable onPress={()=>Keyboard.dismiss()} style={{flex:1, backgroundColor:'white'}}>
        <View style={FormsStyles.upper}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#7697ff','#7697ff', '#21d1ff']}
        style={{position:'absolute',width:'100%', height:'100%'}}
      />
        </View>

      {/* body  */}
        <View style={FormsStyles.body}>
        {/* titles */}
          <View style={FormsStyles.uppertexts}>
            <Text style={FormsStyles.upperTitle}>Safe Space</Text>
            <Text style={FormsStyles.subtitle}>Ultimate roomate finder</Text>
          </View>

          {/* Form */}
          <View style={FormsStyles.formView}>
            <Text>Sign In to Continue</Text>
            <Text>Fill the form Completely</Text>
            {/* input  */}
            <KeyboardAwareScrollView>
              <TextInput mode='outlined' label='Full-Name' autoComplete='given-name' autoFocus value={Fullname} onChangeText={setFullname} />

              <TextInput mode='outlined' label='Email Address' autoComplete='email' keyboardType='email-address' value={Email} onChangeText={setEmail} />
              
              <TextInput mode='outlined' label='Phone No' autoComplete='tel' keyboardType='phone-pad' value={Phonenumber} onChangeText={setPhonenumber} />

              <TextInput mode='outlined' label='Password' autoComplete='new-password' secureTextEntry keyboardType='phone-pad' value={Phonenumber} onChangeText={setPhonenumber} />

            </KeyboardAwareScrollView>
          </View>
        </View>
    </Pressable>
  )
}

export default Register

const styles = StyleSheet.create({
  upper:{
    height:'40%',borderBottomRightRadius:20,borderBottomLeftRadius:20, width:'100%',backgroundColor: 'red',overflow:'hidden',
    alignItems:'center',
    justifyContent:'center'
  },
  upperTitle:{
    color:'white',
    fontFamily:'Poppins_700Bold',
    fontSize:24
  },
  body:{
    paddingHorizontal:'10%',
    position:'absolute',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  uppertexts:{
    alignItems:'center'
  },
  subtitle:{
    fontSize:12,
    fontFamily:'Poppins_400Regular', 
    color:'white'
  },
  formView:{
    width:'100%',backgroundColor:'white',shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})
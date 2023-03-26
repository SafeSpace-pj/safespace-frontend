import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Divider, RadioButton, TextInput } from 'react-native-paper'
import FormsStyles from '../styles/Forms.styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Gradientcomponent from '../component/Gradient.components'
import { AntDesign } from '@expo/vector-icons'

const Register = () => {
  const [Email, setEmail] = useState('')
  const [emailerror, setEmailerror] = useState(false)
  const [PAssword, setPAssword] = useState('')
  const [passworderror, setPassworderror] = useState(true)
  const [Fullname, setFullname] = useState('')
  const [fullnameerror, setFullnameerror] = useState(false)
  const [Phonenumber, setPhonenumber] = useState('')
  const [phonenumbererror, setPhonenumbererror] = useState(false)
  const [Gender, setGender] = useState('p')
  const [Error, setError] = useState('Fill the form')

  return (
    <Pressable onPress={()=>Keyboard.dismiss()} style={{flex:1, backgroundColor:'white'}}>
        <View style={FormsStyles.upper}>
        <Gradientcomponent/>
        </View>

      {/* body  */}
        <View style={FormsStyles.body}>
        {/* titles */}
          <View style={[FormsStyles.uppertexts,{marginBottom:10}]}>
            <Text style={FormsStyles.upperTitle}>Safe Space</Text>
            <Text style={FormsStyles.subtitle}>Ultimate roomate finder</Text>
          </View>

          {/* Form */}
          <View style={FormsStyles.formView}>
            <KeyboardAwareScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
            <View style={FormsStyles.formText}>
              <Text style={FormsStyles.formTitle}>Sign Up to Continue</Text>
              <Text style={FormsStyles.formsubtext}>{Error}</Text>
            </View>
            {/* input  */}
            <View>
              <TextInput error={fullnameerror} contentStyle={FormsStyles.input} style={{backgroundColor:'white'}} outlineColor='#000000' mode='outlined' label='Full-Name' autoComplete='given-name' autoFocus value={Fullname} onChangeText={setFullname} />

              <TextInput error={emailerror} contentStyle={FormsStyles.input} style={{backgroundColor:'white'}} mode='outlined' outlineColor='#000000' label='Email Address' autoComplete='email' keyboardType='email-address' value={Email} onChangeText={setEmail} />
              
              <TextInput error={phonenumbererror} mode='outlined' outlineColor='#000000' label='Phone No' autoComplete='tel' keyboardType='phone-pad' value={Phonenumber} onChangeText={setPhonenumber} />

              <TextInput error={passworderror} contentStyle={FormsStyles.input} style={{backgroundColor:'white'}} mode='outlined' outlineColor='#000000' label='Password' autoComplete='new-password' secureTextEntry value={PAssword} onChangeText={setPAssword} />

              {/* gender  */}
              <View label style={FormsStyles.radioMView}>
                
                <View style={FormsStyles.radioitem}>
                  <RadioButton value='Male' status={Gender=='Male'?'checked':'unchecked'} onPress={()=>setGender('Male')} />
                  <Text style={FormsStyles.radioLabel}>Male</Text>
                </View>

                <View style={FormsStyles.radioitem}>
                  <RadioButton value='Female' status={Gender=='Female'?'checked':'unchecked'} onPress={()=>setGender('Female')} />
                  <Text style={FormsStyles.radioLabel}>Female</Text>
                </View>
              </View>

              {/* register */}
              <TouchableOpacity style={FormsStyles.submitBtn}>
              <Gradientcomponent/>
                <Text style={FormsStyles.submitBtntxt}>Register</Text>
              </TouchableOpacity>

              {/* reset password  */}
              <View style={FormsStyles.ResetView}>
                <TouchableOpacity>
                  <Text style={FormsStyles.ResetText}>Reset Password</Text>
                </TouchableOpacity>
              </View>

              
            </View>

            <Divider style={{marginVertical:20}}/>

            <View style={FormsStyles.AuthView}>
              <TouchableOpacity style={FormsStyles.AuthBtn}>
                <AntDesign name="facebook-square" size={24} color="white" />
                <Text style={[FormsStyles.submitBtntxt,{marginLeft:10}]}>Continue with Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={FormsStyles.AuthBtn}>
                <AntDesign name="google" size={24} color="white" />
                <Text style={[FormsStyles.submitBtntxt,{marginLeft:10}]}>Continue with Google</Text>
              </TouchableOpacity>
            </View>

            </KeyboardAwareScrollView>
          </View>
          
        </View>
    </Pressable>
  )
}

export default Register


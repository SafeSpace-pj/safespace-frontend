import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Divider, RadioButton, TextInput } from 'react-native-paper'
import FormsStyles from '../styles/Forms.styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Gradientcomponent from '../components/Gradient.components';
import { AntDesign } from '@expo/vector-icons'

const Login = ({navigation}) => {
  const [Email, setEmail] = useState('')
  const [emailerror, setEmailerror] = useState(false)
  const [PAssword, setPAssword] = useState('')
  const [passworderror, setPassworderror] = useState(false)
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
              <Text style={FormsStyles.formTitle}>Sign In to Continue</Text>
              <Text style={FormsStyles.formsubtext}>{Error}</Text>
            </View>
            {/* input  */}
            <View>
              <TextInput error={emailerror} contentStyle={FormsStyles.input} style={{backgroundColor:'white'}} mode='outlined' outlineColor='#000000' label='Email Address' autoComplete='email' keyboardType='email-address' value={Email} onChangeText={setEmail} />
              
              <TextInput error={passworderror} contentStyle={FormsStyles.input} style={{backgroundColor:'white'}} mode='outlined' outlineColor='#000000' label='Password' autoComplete='new-password' secureTextEntry value={PAssword} onChangeText={setPAssword} />

              {/* Login */}
              <TouchableOpacity style={[FormsStyles.submitBtn,{marginTop:10}]}>
              <Gradientcomponent/>
                <Text style={FormsStyles.submitBtntxt}>Login</Text>
              </TouchableOpacity>

              {/* reset password  */}
              <View style={FormsStyles.ResetView}>
                <TouchableOpacity onPress={()=>navigation.navigate('Reset1')}>
                  <Text style={FormsStyles.ResetText}>Reset Password</Text>
                </TouchableOpacity>
              </View>

              
            </View>

            <Divider style={{marginVertical:20}}/>

            <View style={FormsStyles.AuthView}>
              <TouchableOpacity style={FormsStyles.AuthBtn}>
                <Gradientcomponent/>

                <AntDesign name="facebook-square" size={24} color="white" />
                <Text style={[FormsStyles.submitBtntxt,{marginLeft:10}]}>Continue with Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={FormsStyles.AuthBtn}>
                <Gradientcomponent/>

                <AntDesign name="google" size={24} color="white" />
                <Text style={[FormsStyles.submitBtntxt,{marginLeft:10}]}>Continue with Google</Text>
              </TouchableOpacity>
              {/* reset password  */}
              <View style={{alignItems:'center'}}>
              
                <TouchableOpacity onPress={()=>navigation.replace('Register')}>
                  <Text style={FormsStyles.ResetText}>Register</Text>
                </TouchableOpacity>
              </View>

            </View>

            </KeyboardAwareScrollView>
          </View>
          
        </View>
    </Pressable>
  )
}

export default Login


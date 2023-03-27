import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Divider, RadioButton, TextInput } from 'react-native-paper'
import FormsStyles from '../styles/Forms.styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Gradientcomponent from '../component/Gradient.components'
import { AntDesign } from '@expo/vector-icons'

const Reset = ({navigation}) => {
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
          <View style={[FormsStyles.uppertexts,{marginBottom:10, marginTop:'-40%'}]}>
            <Text style={FormsStyles.upperTitle}>Safe Space</Text>
            <Text style={FormsStyles.subtitle}>Ultimate roomate finder</Text>
          </View>

          {/* Form */}
          <View style={FormsStyles.formView}>
            <KeyboardAwareScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
            <View style={FormsStyles.formText}>
              <Text style={FormsStyles.formTitle}>Reset your Password</Text>
              <Text style={FormsStyles.formsubtext}>{Error}</Text>
            </View>
            {/* input  */}
            <View>
              <TextInput error={emailerror} contentStyle={FormsStyles.input} style={{backgroundColor:'white'}} mode='outlined' outlineColor='#000000' label='Email Address' autoComplete='email' keyboardType='email-address' value={Email} onChangeText={setEmail} />
              
              {/* Reset */}
              <TouchableOpacity onPress={()=>navigation.navigate('Reset2')} style={[FormsStyles.submitBtn,{marginTop:10}]}>
              <Gradientcomponent/>
                <Text style={FormsStyles.submitBtntxt}>Reset</Text>
              </TouchableOpacity>

              {/* reset password  */}
              <View style={[FormsStyles.ResetView,{alignItems:'flex-start'}]}>
                <TouchableOpacity onPress={()=>navigation.pop()}>
                  <Text style={[FormsStyles.ResetText,{alignItems:'center',justifyContent:'center'}]}><AntDesign name="caretleft" size={10} color="black" />Back</Text>
                </TouchableOpacity>
              </View>

              
            </View>


            </KeyboardAwareScrollView>
          </View>
          
        </View>
    </Pressable>
  )
}

export default Reset


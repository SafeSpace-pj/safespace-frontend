import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Divider, RadioButton, TextInput } from 'react-native-paper'
import FormsStyles from '../../styles/Forms.styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Gradientcomponent from '../../components/Gradient.components';
import { AntDesign } from '@expo/vector-icons'
import MaskEmail from "../../utils/MaskedEmail"

export default function Otp({ route, navigation }) {

  const { resetEmail } = route.params;

  const [PAssword, setPAssword] = useState('')
  const [passworderror, setPassworderror] = useState(false)

  const [OTP, setOTP] = useState('')
  const [otperror, setOtperror] = useState(false)

  const [Error, setError] = useState(`we have sent an otp code to ${MaskEmail(resetEmail)}, fill it in with your new password to continue`)

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
              <Text style={FormsStyles.formTitle}>Reset your password</Text>
              <Text style={FormsStyles.formsubtext}>{Error}</Text>
            </View>
            {/* input  */}
            <View>

              
              <TextInput error={otperror} mode='outlined' outlineColor='#000000' label='OTP' autoComplete='sms-otp' keyboardType='phone-pad' value={OTP} onChangeText={setOTP} maxLength={4} minLength={4} />

              <TextInput error={passworderror} contentStyle={FormsStyles.input} style={{backgroundColor:'white'}} mode='outlined' outlineColor='#000000' label='Password' autoComplete='new-password' secureTextEntry value={PAssword} onChangeText={setPAssword} />

              {/* Reset2 */}
              <TouchableOpacity onPress={()=>navigation.popToTop()} style={[FormsStyles.submitBtn,{marginTop:10}]}>
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

const styles = StyleSheet.create({})
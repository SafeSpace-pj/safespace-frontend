import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function SearchInputComponent({ iconName, placeHolder, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={14} color="#7472E0" />
      <TextInput placeholderTextColor="#000000" style={styles.textInput} placeholder={placeHolder} value={value} onChangeText={onChangeText} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F7F7F7",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 10,
        gap: 8,
        borderRadius: 4
    },
    textInput: {
        flex: 1,
        color: "#000000"
    }
})
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Dropdown } from 'react-native-element-dropdown';

export default function SearchSelectComponent({ iconName, name, value, setValue, data }) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={14} color="#7472E0" />
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? name : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value)
            setIsFocus(false);
          }}
        />
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
    },
    dropdown: {
      flex:1,
      width: "100%",
      height: 40,
      paddingHorizontal: 12,
      justifyContent: "center",
    },
})
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

export default function DropdownElement({ name, data, value, setValue }) {
    const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
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
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: '#7472E0',
      borderWidth: 0.5,
      borderRadius: 6,
      paddingHorizontal: 12,
      justifyContent: "center",
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 14,
      fontFamily: "Poppins_400Regular",
    },
    selectedTextStyle: {
      fontSize: 16,
      fontFamily: "Poppins_400Regular",
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      fontFamily: "Poppins_400Regular",
    },
  });
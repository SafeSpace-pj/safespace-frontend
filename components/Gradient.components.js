import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function Gradientcomponent() {
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#7697ff','#7472E0', '#5654C2']}
        style={{position:'absolute',width:'100%', height:'100%'}}
      />
  )
}
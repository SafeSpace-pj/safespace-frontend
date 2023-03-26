import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function Gradientcomponent() {
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#7697ff','#7697ff', '#21d1ff']}
        style={{position:'absolute',width:'100%', height:'100%'}}
      />
  )
}
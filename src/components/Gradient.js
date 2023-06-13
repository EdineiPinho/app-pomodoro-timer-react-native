import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const Gradient1 = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      }}
    />
  )
}

const Gradient2 = () => {
  return (
    <LinearGradient
      colors={['transparent', 'rgba(44, 28, 88, 0.8)']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        zIndex: -1,
      }}
    />
  )
}

export { Gradient1, Gradient2 }


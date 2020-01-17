import React from 'react'
import { Image, View } from 'react-native'
import styles from './Logo.styles'

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../assets/images/r10_logo.png')} />
    </View>
  )
}

export default Logo

import React from 'react'
import { Text, View } from 'react-native'
import styles from './Header.styles'

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.pageTitle}>{children}</Text>
    </View>
  )
}

export default Header

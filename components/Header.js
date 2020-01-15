import React from 'react'
import { Text } from 'react-native'
import styles from './Header.styles'

const Header = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Header

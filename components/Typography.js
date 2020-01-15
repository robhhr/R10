import React from 'react'
import { Text } from 'react-native'
import styles from './Typography.styles'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

const AboutText = ({ children }) => {
  return <Text style={styles.aboutText}>{children}</Text>
}

const Conduct = ({ children }) => {
  return <Text style={styles.conduct}>{children}</Text>
}

export { Title, AboutText, Conduct }

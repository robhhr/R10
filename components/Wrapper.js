import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import styles from './Wrapper.styles'

const Wrapper = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Wrapper

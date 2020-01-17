import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { About } from './pages/index'
import ApolloWrapper from '../apollo/Apollo'
import Routes from '../navigation/Routes'

const App = () => {
  return (
    <ApolloWrapper>
      <Routes />
    </ApolloWrapper>
  )
}

const styles = StyleSheet.create({})

export default App

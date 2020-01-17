import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { About, Schedule, Favorites } from '../components/pages'

const AppNavigator = createStackNavigator({
  About,
  Schedule,
})

export default createAppContainer(AppNavigator)

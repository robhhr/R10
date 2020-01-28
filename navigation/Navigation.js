import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Routes from './Routes'

export default createAppContainer(
  createStackNavigator(
    {
      Layout: Routes,
    },
    {
      mode: 'modal',
      headerMode: 'none',
    },
  ),
)

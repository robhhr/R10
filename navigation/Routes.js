import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { About, Schedule, Favorites } from '../components/pages'

const HomeRoute = createStackNavigator({
  Home: Schedule,
})

const AboutRoute = createStackNavigator({
  About: About,
})

const FavRoute = createStackNavigator({
  Favorites: Favorites,
})

export default createAppContainer(
  createBottomTabNavigator({
    Home: HomeRoute,
    About: AboutRoute,
    Favorites: FavRoute,
  }),
)

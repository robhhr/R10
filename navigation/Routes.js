import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { About, Schedule, Favorites, Map } from '../components/pages'

const HomeRoute = createStackNavigator({
  Home: Schedule,
})

const AboutRoute = createStackNavigator({
  About: About,
})

const FavRoute = createStackNavigator({
  Favorites: Favorites,
})

const MapRoute = createStackNavigator({
  Map: Map,
})

const BottomNavigation = createBottomTabNavigator(
  {
    Schedule: HomeRoute,
    Map: MapRoute,
    Favorites: FavRoute,
    About: AboutRoute,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state

        if (routeName === 'Schedule') {
          return (
            <Image
              source={require('../assets/images/R2D2.png')}
              style={{ width: 30, height: 30 }}
            />
          )
        } else if (routeName === 'Map') {
          return (
            <Image
              source={require('../assets/images/C3P0.png')}
              style={{ width: 30, height: 30 }}
            />
          )
        } else if (routeName === 'Favorites') {
          return (
            <Image
              source={require('../assets/images/Rebel.png')}
              style={{ width: 30, height: 30 }}
            />
          )
        } else if (routeName === 'About') {
          return (
            <Image
              source={require('../assets/images/Yoda.png')}
              style={{ width: 30, height: 30 }}
            />
          )
        }
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: 'black',
      inactiveBackgroundColor: 'black',
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      style: { height: 65 },
    },
  },
)

export default createAppContainer(BottomNavigation)

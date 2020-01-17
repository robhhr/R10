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
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../assets/images/R2D2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        } else {
          return (
            <Image
              source={require('../assets/images/R2D2.png')}
              style={{ width: 20, height: 20 }}
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
    },
  },
)

export default createAppContainer(BottomNavigation)

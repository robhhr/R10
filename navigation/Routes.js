import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { About, Schedule, Favorites, Map } from '../components/pages'
import Icon from 'react-native-vector-icons/Ionicons'

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
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state

        if (routeName === 'Schedule') {
          return <Icon name="ios-calendar" color={tintColor} size={25} />
        } else if (routeName === 'Map') {
          return <Icon name="ios-map" color={tintColor} size={25} />
        } else if (routeName === 'Favorites') {
          return <Icon name="ios-heart" color={tintColor} size={25} />
        } else if (routeName === 'About') {
          return (
            <Icon name="ios-information-circle" color={tintColor} size={25} />
          )
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      style: { height: 65, backgroundColor: 'black' },
      labelStyle: { fontSize: 12 },
    },
  },
)

export default createAppContainer(BottomNavigation)

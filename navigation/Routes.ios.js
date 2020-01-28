import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { About, Schedule, Favorites, Map, Session } from '../components/pages'
import { sharedNavigationOptions } from './config'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeRoute = createStackNavigator(
  {
    Home: Schedule,
    Session: Session,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
)

const AboutRoute = createStackNavigator(
  {
    About: About,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
)

const FavRoute = createStackNavigator(
  {
    Faves: Favorites,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
)

const MapRoute = createStackNavigator(
  {
    Map: Map,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
)

const SessionRoute = createStackNavigator(
  {
    Session: Session,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
)

export default createBottomTabNavigator(
  {
    Schedule: HomeRoute,
    Map: MapRoute,
    Faves: FavRoute,
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
        } else if (routeName === 'Faves') {
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

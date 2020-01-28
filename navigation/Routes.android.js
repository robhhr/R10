import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { About, Schedule, Favorites, Map, Session } from '../components/pages'
import { sharedNavigationOptions } from './config'
import Icon from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator } from 'react-navigation-drawer'

const HomeRoute = createStackNavigator(
  {
    Home: Schedule,
    Session: Session,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Schedule',
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
      title: 'About',
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
      title: 'Faves',
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
      title: 'Schedule',
    }),
  },
)

const DrawerNavigator = createDrawerNavigator(
  {
    Schedule: HomeRoute,
    Map: MapRoute,
    Faves: FavRoute,
    About: AboutRoute,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ tintColor }) => {
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

export default createAppContainer(DrawerNavigator)

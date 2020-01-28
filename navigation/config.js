import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Header } from 'react-navigation-stack'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = ({ navigation }) => (
  <Icon
    name="md-menu"
    size={25}
    color="#fff"
    onPress={navigation.openDrawer}
    style={{ marginLeft: 10 }}
  />
)

const GradientHeader = props => {
  return (
    <View>
      <LinearGradient
        colors={['#cf392a', '#9963ea']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={[StyleSheet.absoluteFill, { height: 'auto', width: '100%' }]}
      />
      <Header {...props} />
    </View>
  )
}

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  ...Platform.select({
    android: { headerLeft: <Drawer navigation={navigation} /> },
  }),
})

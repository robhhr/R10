import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FavoritesContextProvider from '../context/favorites'
import { View } from 'react-native'

const Favorite = ({ id, ...props }) => {
  const [fav, storeFavorites, deleteFavorites] = FavoritesContextProvider()

  return (
    <View
      onPress={() => {
        !fav.includes(id) ? storeFavorites(id) : deleteFavorites(id)
      }}
      {...props}>
      <Icon name={fav.includes(id) ? 'ios - heart - empty' : 'ios - heart'} />
    </View>
  )
}

export default Favorite

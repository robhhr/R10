import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FavoritesContext from '../context/favorites'
import { View } from 'react-native'

const FavoriteButton = ({ id, ...props }) => {
  // const { favorites, storeFavorites, deleteFavorites } = useContext(
  //   FavoritesContext,
  // )

  return (
    <View
    // onPress={() =>
    //   favorites.includes(id) ? deleteFavorites(id) : storeFavorites(id)
    // }
    >
      <Icon name="ios-heart-empty" size={18} />
    </View>
  )
}

export default FavoriteButton

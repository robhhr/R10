import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FavoritesContext } from '../context/favorites'
import { View, TouchableOpacity } from 'react-native'

const FavoriteButton = ({ id, ...props }) => {
  const { favorites, addFavs, removeFavs } = useContext(FavoritesContext)

  return (
    <TouchableOpacity
      onPress={() =>
        favorites && favorites.includes(id) ? removeFavs(id) : addFavs(id)
      }>
      <Icon
        name={
          favorites && favorites.includes(id) ? 'ios-heart' : 'ios-heart-empty'
        }
        size={20}
      />
    </TouchableOpacity>
  )
}

export default FavoriteButton

import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FavoritesContext } from '../context/favorites'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = ({ id, children, ...props }) => {
  const { favorites, addFavs, removeFavs } = useContext(FavoritesContext)

  return (
    <TouchableOpacity
      onPress={() =>
        favorites && favorites.includes(id) ? removeFavs(id) : addFavs(id)
      }>
      <Text>
        {favorites && favorites.includes(id)
          ? 'Remove from Faves'
          : 'Add to Faves'}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

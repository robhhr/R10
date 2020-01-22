import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FavoritesContext } from '../context/favorites'
import { View } from 'react-native'

const FavoriteButton = ({ id, ...props }) => {
  const { favorites, addFavs, removeFavs } = useContext(FavoritesContext)
  // console.log(favorites)
  return (
    <View>
      <Icon
        name={favorites.includes(id) ? 'ios-heart' : 'ios-heart-empty'}
        size={20}
      />
    </View>
  )
}

export default FavoriteButton

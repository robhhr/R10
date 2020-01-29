import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FavoritesContext } from '../context/favorites'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Button.styles'

const Button = ({ id, children, ...props }) => {
  const { favorites, addFavs, removeFavs } = useContext(FavoritesContext)

  return (
    <View style={styles.buttonContainer}>
      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            favorites && favorites.includes(id) ? removeFavs(id) : addFavs(id)
          }>
          <Text style={styles.buttonText}>
            {favorites && favorites.includes(id)
              ? 'Remove from Faves'
              : 'Add to Faves'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default Button

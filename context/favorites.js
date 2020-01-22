import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const FavoritesContext = createContext()

const FavoritesContextProvider = ({ children, ...props }) => {
  const [favorites, setFavorites] = useState([])

  const getFavorites = async () => {
    try {
      const res = await AsyncStorage.getItem('favs')
      setFavorites(JSON.parse(res))
    } catch (e) {
      console.error('read blop')
    }
  }

  const addFavs = async id => {
    try {
      const newFavorite = await AsyncStorage.setItem(id)
      setFavorites({
        favorites: [...favorites, newFavorite],
      })
      getFavorites()
    } catch (e) {
      console.error('add bloop')
    }
  }

  const removeFavs = async id => {
    try {
      await AsyncStorage.removeItem(id)
      getFavorites()
    } catch (e) {
      console.error('remove bloop')
    }
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, addFavs, removeFavs }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider

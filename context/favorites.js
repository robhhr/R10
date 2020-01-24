import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const FavoritesContext = createContext()

const FavoritesContextProvider = ({ children, ...props }) => {
  const [favorites, setFavorites] = useState([])

  const favoritesList = async () => {
    const favorites = await getFavorites()
    setFavorites(favorites || [])
  }

  const getFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites')
      return JSON.parse(favorites) || []
    } catch (e) {
      console.error('getFavorites error')
    }
  }

  const addFavs = async id => {
    try {
      if (!favorites.includes(id))
        await AsyncStorage.setItem(
          'favorites',
          JSON.stringify([...favorites, id]),
        )
    } catch (e) {
      console.error('addFavs error')
    }
    favoritesList()
  }

  const removeFavs = async id => {
    try {
      const i = favorites.indexOf(id)
      if (i !== -1) {
        const newFavs = [...favorites]
        newFavs.splice(i, 1)

        await AsyncStorage.setItem('favorites', JSON.stringify(newFavs))
      }
    } catch (e) {
      console.error('removeFavs error')
    }
    favoritesList()
  }

  useEffect(() => {
    favoritesList()
  }, [])

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavs, removeFavs }}
      {...props}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext }
export default FavoritesContextProvider

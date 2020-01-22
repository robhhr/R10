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
      const res = await AsyncStorage.getItem('favorites')
      setFavorites(JSON.parse(res))
    } catch (e) {
      console.error('read blop')
    }
  }

  const addFavs = async id => {
    if (!favorites.includes(id))
      try {
        const value = await AsyncStorage.setItem(
          'favorites',
          JSON.stringify([...favorites, id]),
        )
        return value
      } catch (e) {
        console.error('add bloop')
      }
    favoritesList()
  }

  const removeFavs = async id => {
    try {
      await AsyncStorage.removeItem(
        'favorites',
        JSON.stringify([...favorites, id]),
      )
    } catch (e) {
      console.error('remove bloop')
    }
    favoritesList()
  }

  useEffect(() => {
    favoritesList()
  }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, addFavs, removeFavs }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext }
export default FavoritesContextProvider

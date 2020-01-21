import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const storeFavorites = async id => {
  try {
    await AsyncStorage.setItem(`${id}`, JSON.stringify({ id: id }))
  } catch (e) {
    console.error('store bloop')
  }
}

const deleteFavorites = async id => {
  try {
    AsyncStorage.removeItem(`${id}`)
  } catch (e) {
    console.error('delete bloop')
  }
}

const getFavorites = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const favorite = await AsyncStorage.multiGet(keys)
    return favorite
    // return JSON.parse(favorites)
  } catch (e) {
    console.error('read blop')
  }
}

const FavoritesContext = createContext()

const FavoritesContextProvider = ({children, ...props}) => {
  const [favorites, setFavorites] = useState([])

  const getAllIds = async () => {
    try {
      const selectedFavorites = await getFavorites()
      favorites = selectedFavorites.map(i => i[0])
      setFavorites({
        favorites,
      })
    } catch (error) {
      console.error('getAllFavorites bloop')
    }
  }

  const addFavs = async (favId) => {
    try {
      const newFavorite = await storeFavorites(favId)
      setId({
        favorites: [...favorites, newFavorite]
      })
      getAllIds()
    } catch (e) {
      console.error('add bloop')
    }
  }

  const removeFavs = async (favId) => {
    try {
      await deleteFavorites(favId)
      getAllIds()
    } catch (e) {
      console.error('remove bloop')
    }
  }

  useEffect(() => {
    getAllIds()
  }, [])

  return (
    <FavoritesContext.Provider value={{favorites, addFavs, removeFavs}}>
      {children}
    </FavoritesContext.Provider>
  )
}

export {FavoritesContext}
export default FavoritesContextProvider

import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export default FavoritesContext = createContext()

const FavoritesContextProvider = () => {
  const [fav, setFav] = useState([])

  const storeFavorites = async id => {
    try {
      await AsyncStorage.setItem('fav', JSON.stringify({ ...fav, id }))
    } catch (e) {
      console.error('store bloop')
    }
    getFavs()
  }

  const getFavorites = async () => {
    try {
      const fav = await AsyncStorage.getItem('fav')
      return JSON.parse(fav)
    } catch (e) {
      console.error('read blop')
    }
  }

  const deleteFavorites = id => {
    try {
      AsyncStorage.removeItem(`${id}`)
    } catch (e) {
      console.error('delete bloop')
    }
    getFavs()
  }

  const getFavs = async () => {
    const selectedFavorites = await getFavorites()
    // const id = selectedFavorites.map(fav => fav[0])
    setFav(selectedFavorites)
  }

  // const addFavs = async (favid) => {
  //   try {
  //     const newFavorite = await storeFavorites(favid)
  //     setId({
  //       id: [...id, newFavorite]
  //     })
  //     getFavs()
  //   } catch (e) {
  //     console.error('add bloop')
  //   }
  // }

  // const removeFavs = async (favid) => {
  //   try {
  //     await deleteFavorites(favid)
  //     getFavs()
  //   } catch (e) {
  //     console.error('remove bloop')
  //   }
  // }

  useEffect(() => {
    getFavs()
  }, [])

  return [fav, storeFavorites, deleteFavorites]
}

export default FavoritesContextProvider

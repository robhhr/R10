import AsyncStorage from '@react-native-community/async-storage'

const storeFavorites = async id => {
  try {
    await AsyncStorage.setItem(
      `${id}`,
      JSON.stringify({ id: id, faved: new Date() }),
    )
  } catch (e) {
    console.error('store bloop')
  }
}

const deleteFavorites = id => {
  try {
    AsyncStorage.removeItem(`${id}`)
  } catch (e) {
    console.error('delete bloop')
  }
}

const getFavorites = async keys => {
  const keys = await AsyncStorage.getAllKeys()
  try {
    const favorites = await AsyncStorage.multiGet(keys)
    return favorites
  } catch (e) {
    console.error('read blop')
  }
}

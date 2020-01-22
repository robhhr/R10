import AsyncStorage from '@react-native-community/async-storage'

const GF = async id => {
  try {
    return await AsyncStorage.getItem(id)
  } catch (e) {
    // get error
  }
}

const FVS = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const values = await AsyncStorage.multiGet(keys)
    return values.map(value => JSON.parse(value[1]))
  } catch (e) {
    // favs list error
  }
}

const AFVS = async id => {
  try {
    await AsyncStorage.setItem(id, JSON.stringify({ id: id }))
  } catch (e) {
    // add error
  }
}

const RMFVS = async id => {
  try {
    const fav = await AsyncStorage.removeItem(id)
    return fav
  } catch (e) {
    // remove error
  }
}

export { GF, FVS, RMFVS, AFVS }

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  sessions: {
    backgroundColor: 'white',
  },
  time: {
    backgroundColor: '#e6e6e6',
    height: 35,
    display: 'flex',
    justifyContent: 'center',
  },
  sessionTime: {
    marginHorizontal: 15,
  },
  individualSession: {
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  favoriteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    alignItems: 'baseline',
  },
  location: {
    backgroundColor: 'white',
    color: '#999999',
    fontWeight: '600',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  sessionContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
})

export default styles

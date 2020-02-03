import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  favoriteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 25,
    marginBottom: 10,
  },
  location: {
    backgroundColor: 'white',
    color: '#999999',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonSeparator: {
    borderTopWidth: 2,
    borderTopColor: '#e6e6e6',
    marginTop: 30,
  },
  time: {
    color: '#cf392a',
    fontSize: 16,
    marginVertical: 15,
    fontWeight: '400',
  },
  author: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginVertical: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '75%',
    borderTopWidth: 2,
    borderTopColor: 'red',
    borderRadius: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
    marginVertical: 15,
  },
})

export default styles

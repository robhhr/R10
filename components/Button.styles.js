import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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

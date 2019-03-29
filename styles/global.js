import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  homeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    paddingTop: 20
  },

  iconButton: {
    width: 75
  },
  iconButton_text: {
    fontSize: 9,
    textAlign: 'center'
  },

  image: {
    width: '100%',
    height: 50,
    resizeMode: 'contain'
  }
})

export default globalStyles

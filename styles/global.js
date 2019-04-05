import { StyleSheet } from 'react-native'
import { colors } from '../constants/colors'

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
  iconButton_kslIcon: {
    fontSize: 40,
    height: 50,
    textAlign: 'center',
    color: colors.blue
  },

  image: {
    width: '100%',
    height: 50,
    resizeMode: 'contain'
  }
})

export default globalStyles

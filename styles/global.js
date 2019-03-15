

import { StyleSheet } from 'react-native';

import colors from './colors';

const globalStyles = StyleSheet.create({
  homeFooter:{
    flex:1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxWidth: "100%"

  },

  iconButton: {
    fontSize: 16,
    flex: 1,
    width: 60
  },

  image: {
    maxWidth:"100%",
    resizeMode: "contain"
  }
});

export default globalStyles;
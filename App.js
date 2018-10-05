import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Permissions } from 'expo'
import ImagePicker from './components/ImagePicker';

export default class App extends React.Component {
  async getPermissions() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      ImagePicker.launchImageLibraryAsync({mediaTypes: Expo.ImagePicker.ALL})
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <ImagePicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
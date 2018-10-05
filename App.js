import React from 'react';
import { Permissions } from 'expo'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import ImagePicker from './components/ImagePicker';
import ReduxExample from './components/ReduxExample';

export default class App extends React.Component {
  async getPermissions() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      ImagePicker.launchImageLibraryAsync({mediaTypes: Expo.ImagePicker.ALL})
    }
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <ReduxExample />
        </View>
      </Provider>
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

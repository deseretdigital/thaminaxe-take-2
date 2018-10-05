import React from 'react';
import { Permissions } from 'expo'
import { Provider } from 'react-redux';
import store from './store';
import { NativeRouter, Switch, Route, Link } from 'react-router-native'
import { Container, Header, Content, Card, CardItem, Icon, Right, Text, View } from 'native-base';

import Home from './components/Home';

export default class App extends React.Component {
  // async getPermissions() {
  //   const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  //   if (status === 'granted') {
  //     ImagePicker.launchImageLibraryAsync({mediaTypes: Expo.ImagePicker.ALL})
  //   }
  // }
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/classifieds" render={() => <View><Text>Classifieds</Text></View>} />
            <Route path="/cars" render={() => <Text>Cars</Text>} />
            <Route path="/homes" render={() => <Text>Homes</Text>} />
            <Route path="/jobs" render={() => <Text>Jobs</Text>} />
          </Switch>
        </NativeRouter>
      </Provider>
    );
  }
}

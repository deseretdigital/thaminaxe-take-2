import React from 'react';
import { Permissions } from 'expo'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { NativeRouter, Switch, Route, Link } from 'react-router-native'
import { Container, Header, Content, Card, CardItem, Icon, Right } from 'native-base';
import ImagePicker from './components/ImagePicker';
import ReduxExample from './components/ReduxExample';
import ListButton from './components/ListButton';



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
            <Route exact path="/" render={() => 
              <Container>
                <Header />
                <Content>
                  <ListButton to='classifieds' text='Classifieds' iconLeft='tool' />
                  <ListButton to='cars' text='Cars' iconLeft='car' />
                  <ListButton to='homes' text='homes' iconLeft='home' />
                  <ListButton to='jobs' text='jobs' iconLeft='ios-briefcase' />
                </Content>
              </Container>
            } />
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

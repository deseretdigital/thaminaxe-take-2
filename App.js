import React from 'react';
import { Permissions } from 'expo'
import { Provider } from 'react-redux';
import store from './store';
import { NativeRouter, Switch, Route, Link } from 'react-router-native'
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Button, Icon, Right, Text, View } from 'native-base';

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
        <Container>
        <Header />
        <Content>
          <NativeRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/classifieds" render={() => <View><Text>Classifieds</Text></View>} />
              <Route path="/cars" render={() => <Text>Cars</Text>} />
              <Route path="/homes" render={() => <Text>Homes</Text>} />
              <Route path="/jobs" render={() => <Text>Jobs</Text>} />
            </Switch>
          </NativeRouter>
          </Content>
          <Footer style={{marginBottom: 20}}>
            <FooterTab>
              <Button vertical>
                <Icon name="ios-add-circle" />
                <Text style={{fontSize: 8}}>Add Listing</Text>
              </Button>
              <Button vertical>
                <Icon name="ios-save" />
                <Text style={{fontSize: 8}}>Saved Searches</Text>
              </Button>
              <Button vertical>
                <Icon name="ios-heart" />
                <Text style={{fontSize: 8}}>Favorites</Text>
              </Button>
              <Button vertical>
                <Icon name="ios-person" />
                <Text style={{fontSize: 8}}>My Listings</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    );
  }
}

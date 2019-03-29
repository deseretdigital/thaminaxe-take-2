import React from 'react'
import Expo from 'expo'
import { Dimensions } from 'react-native'
// import { Permissions } from 'expo'
import { Provider } from 'react-redux'
import store from './store'
import { NativeRouter, Switch, Route } from 'react-router-native'
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Content,
  Button,
  Icon,
  Text,
  View
} from 'native-base'
import Home from './components/Home'
import Cars from './components/Cars'

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async componentWillMount () {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
  }

  // async getPermissions() {
  //   const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  //   if (status === 'granted') {
  //     ImagePicker.launchImageLibraryAsync({mediaTypes: Expo.ImagePicker.ALL})
  //   }
  // }
  render () {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    const containerMargin = width * 0.1
    const contentStyle = {
      marginLeft: containerMargin,
      marginRight: containerMargin
    }
    return (
      <Provider store={store}>
        <Container>
          <Header />
          <Content style={contentStyle}>
            <NativeRouter>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route
                  path='/classifieds'
                  render={() => (
                    <View>
                      <Text>Classifieds</Text>
                    </View>
                  )}
                />
                <Route path='/cars' render={() => <Cars />} />
                <Route path='/homes' render={() => <Text>Homes</Text>} />
                <Route path='/jobs' render={() => <Text>Jobs</Text>} />
              </Switch>
            </NativeRouter>
          </Content>
        </Container>
      </Provider>
    )
  }
}

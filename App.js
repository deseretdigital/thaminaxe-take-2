import React from 'react'
import Expo from 'expo'
// import { Permissions } from 'expo'
import { Provider } from 'react-redux'
import store from './store'
import { NativeRouter, Switch, Route } from 'react-router-native'
import { Text } from 'native-base'
import Home from './components/Home'
import Cars from './components/Cars'
import GlobalContainer from './components/reusable/GlobalContainer'
import AddListing from './components/AddListing'

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async componentWillMount () {
    await Expo.Font.loadAsync({
      KslIcons: require('./assets/ksl-icons/font/ksl-icons.ttf'),
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
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/classifieds'
              render={() => (
                <GlobalContainer>
                  <Text>Classifieds</Text>
                </GlobalContainer>
              )}
            />
            <Route path='/cars' render={() => <Cars />} />
            <Route
              path='/homes'
              render={() => (
                <GlobalContainer>
                  <Text>Homes</Text>
                </GlobalContainer>
              )}
            />
            <Route
              path='/jobs'
              render={() => (
                <GlobalContainer>
                  <Text>Jobs</Text>
                </GlobalContainer>
              )}
            />
            <Route
              path='/search'
              render={() => (
                <GlobalContainer showSearch={false} showCloseButton>
                  <Text>Search</Text>
                </GlobalContainer>
              )}
            />
            <Route
              path='/menu'
              render={() => (
                <GlobalContainer
                  showBackButton={false}
                  showSearch={false}
                  showCloseButton
                  showMenu={false}
                >
                  <Text>Menu</Text>
                </GlobalContainer>
              )}
            />
            <Route path='/add_listing' component={AddListing} />
          </Switch>
        </NativeRouter>
      </Provider>
    )
  }
}

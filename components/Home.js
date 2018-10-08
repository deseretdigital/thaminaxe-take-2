import React from 'react';
import { View } from 'react-native'
import { Button, Container, Header, Footer, Content, FooterTab, Icon, Text, Thumbnail } from 'native-base';

import ListButton from './reusable/ListButton';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Thumbnail square style={{flex: 1, height: 82, width: 260}} source={require('../assets/logo-ksl-classifieds-dkblue.png')} />
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Text style={{textAlign: 'center', fontWeight: '500', lineHeight: 22}}>Because someone around here has what you need or wants what you have.</Text>
        </View>
        <ListButton to='classifieds' text='Classifieds' iconLeft='bicycle' />
        <ListButton to='cars' text='Cars' iconLeft='car' />
        <ListButton to='homes' text='homes' iconLeft='home' />
        <ListButton to='jobs' text='jobs' iconLeft='ios-briefcase' />
      </View>
    );
  }
}

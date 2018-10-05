import React from 'react';
import { View } from 'react-native'
import { Button, Container, Header, Footer, Content, FooterTab, Icon, Text } from 'native-base';

import ListButton from './reusable/ListButton';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <ListButton to='classifieds' text='Classifieds' iconLeft='bicycle' />
        <ListButton to='cars' text='Cars' iconLeft='car' />
        <ListButton to='homes' text='homes' iconLeft='home' />
        <ListButton to='jobs' text='jobs' iconLeft='ios-briefcase' />
      </View>
    );
  }
}

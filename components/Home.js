import React from 'react';
import { Container, Header, Content } from 'native-base';

import ListButton from './reusable/ListButton';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListButton to='classifieds' text='Classifieds' iconLeft='tool' />
          <ListButton to='cars' text='Cars' iconLeft='car' />
          <ListButton to='homes' text='homes' iconLeft='home' />
          <ListButton to='jobs' text='jobs' iconLeft='ios-briefcase' />
        </Content>
      </Container>
    );
  }
}

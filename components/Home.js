import React from 'react';
import { Button, Container, Header, Content, FooterTab, Text } from 'native-base';

import ListButton from './reusable/ListButton';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListButton to='classifieds' text='Classifieds' iconLeft='bicycle' />
          <ListButton to='cars' text='Cars' iconLeft='car' />
          <ListButton to='homes' text='homes' iconLeft='home' />
          <ListButton to='jobs' text='jobs' iconLeft='ios-briefcase' />
        </Content>
        <FooterTab style={{
          height: 10
        }}>
          <Button>
            <Text>Add Listing</Text>
          </Button>
          <Button>
            <Text>Saved Searches</Text>
          </Button>
          <Button>
            <Text>Favorites</Text>
          </Button>
          <Button>
            <Text>My Listings</Text>
          </Button>
        </FooterTab>
      </Container>
    );
  }
}

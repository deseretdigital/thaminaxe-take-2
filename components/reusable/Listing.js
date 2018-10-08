import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>2019 Volvo XC40 Momentum</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://img.ksl.com/mx/mplace-cars.ksl.com/163786-1538779621-356221.jpg?filter=marketplace/400x300_dealer'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
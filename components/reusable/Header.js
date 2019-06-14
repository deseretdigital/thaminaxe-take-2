import React, { Component } from 'react'
import { Text } from 'react-native'
import { Header as H, Left, Body, Right, Button, Icon } from 'native-base'
import { Link } from 'react-router-native'
export default class Header extends Component {
  static defaultProps = {
    to: '/home',
    showBackButton: false,
    body: null,
    rightButtons: []
  };
  backButton () {
    return this.props.showBackButton ? (
      <Left>
        <Link to={this.props.to || '/home'}>
          <Button transparent>
            <Icon name='ios-arrow-back' />
            <Text style={{ paddingTop: 4, paddingLeft: 5 }}>{'Back'}</Text>
          </Button>
        </Link>
      </Left>
    ) : null
  }
  body () {
    return this.props.body ? <Body>{this.props.body}</Body> : null
  }
  rightButtons () {
    return this.props.rightButtons.map(button => {
      return (
        <Button transparent onPress={button.onPress}>
          <Icon name={button.icon} />
        </Button>
      )
    })
  }
  render () {
    return (
      <H>
        {this.backButton()}
        {this.body()}
        <Right>{this.rightButtons()}</Right>
      </H>
    )
  }
}

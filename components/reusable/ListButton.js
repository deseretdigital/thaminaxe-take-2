import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-native'
import { Card, CardItem, Icon, Right, Text } from 'native-base';



export default class ListButton extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconLeft: PropTypes.string.isRequired,
    rightIcon: PropTypes.string
  }
  static defaultProps = {
    rightIcon: "ios-arrow-forward"
  }
  render() {
    return (
      <Link to={`/${this.props.to}`}>
        <Card style={{marginLeft: 10, marginRight: 10}}>
          <CardItem style={{backgroundColor: '#F7941D'}}>
            <Icon style={{color: 'white'}} active name={this.props.iconLeft} />
            <Text style={{flex: 1, color: 'white'}}>{this.props.text}</Text>
            <Right>
              <Icon style={{flex: 0, color: 'white'}} name="ios-arrow-forward" />
            </Right>
          </CardItem>
        </Card>
      </Link>
    );
  }
}

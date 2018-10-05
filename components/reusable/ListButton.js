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
      <Card>
        <CardItem>
          <Icon active name={this.props.iconLeft} />
          <Link to={`/${this.props.to}`}>
            <Text>{this.props.text}</Text>
          </Link>
          <Right>
            <Icon name="ios-arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    );
  }
}

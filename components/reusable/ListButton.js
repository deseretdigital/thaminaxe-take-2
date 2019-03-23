import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-native'
import { Card, CardItem, Icon, Right, Text } from 'native-base'

export default class ListButton extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconLeft: PropTypes.string,
    rightIcon: PropTypes.string,
    rightIconColor: PropTypes.string,
    buttonBGColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
  };
  static defaultProps = {
    rightIcon: 'ios-arrow-forward',
    rightIconColor: 'white'
  };
  getLeftIcon () {
    return this.props.iconLeft ? (
      <Icon style={{ color: 'white' }} active name={this.props.iconLeft} />
    ) : null
  }
  render () {
    return (
      <Link to={`/${this.props.to}`}>
        <Card style={{ marginLeft: 10, marginRight: 10 }}>
          <CardItem style={{ backgroundColor: this.props.buttonBGColor }}>
            {this.getLeftIcon()}
            <Text style={{ flex: 1, color: this.props.textColor }}>
              {this.props.text}
            </Text>
            <Right>
              <Icon
                style={{ flex: 0, color: this.props.rightIconColor }}
                name={this.props.rightIcon}
              />
            </Right>
          </CardItem>
        </Card>
      </Link>
    )
  }
}

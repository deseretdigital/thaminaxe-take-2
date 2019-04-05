import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-native'
import { Text } from 'native-base'
import { Image, View } from 'react-native'

import KslIcon from './KslIcon'
import { colors } from '../../constants/colors'

export default class IconButton extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    kslIcon: PropTypes.string
  };
  static defaultProps = {
    image: require('../../assets/icon.png')
  };
  render () {
    return (
      <View style={{ width: 75 }}>
        <Link to={`${this.props.to}`}>
          <View>
            {this.props.kslIcon ? (
              <KslIcon
                name={this.props.kslIcon}
                style={{
                  fontSize: 40,
                  height: 50,
                  textAlign: 'center',
                  color: colors.blue
                }}
              />
            ) : (
              <Image
                source={this.props.image}
                style={{
                  width: '100%',
                  height: 50,
                  resizeMode: 'contain'
                }}
              />
            )}
            <Text
              style={{
                fontSize: 9,
                textAlign: 'center'
              }}
            >
              {this.props.label}
            </Text>
          </View>
        </Link>
      </View>
    )
  }
}

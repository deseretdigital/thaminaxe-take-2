import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-native'
import { Text } from 'native-base'
import { Image, View } from 'react-native'

import Icon from './Icon'
import { colors } from '../../constants/colors'

export default class IconButton extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.shape({ name: PropTypes.string, set: PropTypes.string }),
    iconStyles: PropTypes.object,
    imageStyles: PropTypes.object,
    backgroundStyles: PropTypes.object,
    labelStyles: PropTypes.object
  };
  static defaultProps = {
    image: require('../../assets/icon.png'),
    iconStyles: {},
    backgroundStyles: {},
    labelStyles: {},
    imageStyles: {}
  };
  defaultStyles = {
    icon: {
      fontSize: 40,
      height: 50,
      textAlign: 'center',
      color: colors.blue
    },
    image: {
      width: '100%',
      height: 50,
      resizeMode: 'contain'
    },
    label: {
      fontSize: 9,
      textAlign: 'center'
    },
    background: { width: 75 }
  };
  render () {
    const {
      to,
      label,
      image,
      icon,
      iconStyles,
      imageStyles,
      backgroundStyles,
      labelStyles
    } = this.props
    const {
      icon: defaultIcon,
      label: defaultLabel,
      image: defaultImage,
      background: defaultBackground
    } = this.defaultStyles
    return (
      <View style={[defaultBackground, backgroundStyles]}>
        <Link to={`${to}`}>
          <View>
            {icon ? (
              <Icon
                name={icon.name}
                set={icon.set}
                style={[defaultIcon, iconStyles]}
              />
            ) : (
              <Image source={image} style={[defaultImage, imageStyles]} />
            )}
            <Text style={[defaultLabel, labelStyles]}>{label}</Text>
          </View>
        </Link>
      </View>
    )
  }
}

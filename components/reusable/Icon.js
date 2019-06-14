import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Ionicons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons
} from '@expo/vector-icons'
import KslIcon from './KslIcon'

const icons = {
  Ionicons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  KslIcon
}

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    set: PropTypes.string.isRequired
  };

  render () {
    const { set, ...props } = this.props
    const Icon = icons[set]
    return <Icon {...props} />
  }
}

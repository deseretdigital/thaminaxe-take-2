import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import IconButton from './IconButton'

export default class IconTabs extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.shape({
          name: PropTypes.string,
          set: PropTypes.string
        }),
        selected: PropTypes.bool,
        to: PropTypes.string
      })
    ).isRequired,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    selectedBackgroundColor: PropTypes.string,
    selectedColor: PropTypes.string
  };

  addBorder (tab, styles) {
    const color = tab.selected
      ? this.props.selectedBackgroundColor
      : this.props.borderColor
    const borderStyles = {
      borderTopColor: color,
      borderTopWidth: 1,
      borderRightColor: color,
      borderRightWidth: 1,
      borderBottomColor: color,
      borderBottomWidth: 1,
      borderLeftColor: color,
      borderLeftWidth: 1
    }
    return Object.assign(styles, borderStyles)
  }

  getTab (tab) {
    const background = {
      backgroundColor: tab.selected
        ? this.props.selectedBackgroundColor
        : this.props.backgroundColor,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 5,
      paddingLeft: 5
    }
    const color = tab.selected ? this.props.selectedColor : this.props.color
    return (
      <IconButton
        key={tab.label}
        to={tab.to}
        label={tab.label}
        icon={tab.icon}
        iconStyles={{ color }}
        labelStyles={{ color }}
        backgroundStyles={this.addBorder(tab, background)}
      />
    )
  }

  render () {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          maxWidth: '100%',
          paddingTop: 20
        }}
      >
        {this.props.tabs.map(tab => this.getTab(tab))}
      </View>
    )
  }
}

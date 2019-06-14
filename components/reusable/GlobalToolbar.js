import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-native'
import { Text } from 'native-base'
import { View, TouchableOpacity } from 'react-native'

import KslIcon from './KslIcon'
import { colors } from '../../constants/colors'

class GlobalToolbar extends React.Component {
  static propTypes = {
    showBackButton: PropTypes.bool,
    showBorderAndBG: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    showSearch: PropTypes.bool,
    showMenu: PropTypes.bool
  };
  static defaultProps = {
    showBackButton: true,
    showBorderAndBG: true,
    showCloseButton: false,
    showSearch: true,
    showMenu: true
  };

  handleBack = () => {
    const { history } = this.props

    if (history.index === 0) {
      return false // home screen
    } else {
      history.goBack()
      return true
    }
  };

  render () {
    const iconColor = this.props.showBorderAndBG ? 'white' : colors.darkGray

    const style = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20
    }

    const iconStyles = {
      fontSize: 30,
      height: 40,
      marginLeft: 20,
      color: iconColor
    }

    return (
      <View
        style={
          this.props.showBorderAndBG
            ? {
              ...style,
              backgroundColor: colors.blue
            }
            : style
        }
      >
        {this.props.showBackButton ? (
          <TouchableOpacity
            onPress={this.handleBack}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 40,
              top: -5,
              left: -10
            }}
          >
            <KslIcon
              name='chevron-left'
              style={{
                height: 40,
                lineHeight: 40,
                fontSize: 40,
                marginLeft: 0,
                color: iconColor
              }}
            />
            <Text
              style={{
                fontSize: 25,
                color: iconColor
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          {this.props.showCloseButton && (
            <TouchableOpacity onPress={this.handleBack}>
              <KslIcon name='circle-close' style={iconStyles} />
            </TouchableOpacity>
          )}
          {this.props.showSearch && (
            <Link to='/search'>
              <KslIcon name='search' style={iconStyles} />
            </Link>
          )}
          {this.props.showMenu && (
            <Link to='/menu'>
              <KslIcon name='menu' style={iconStyles} />
            </Link>
          )}
        </View>
      </View>
    )
  }
}

export default withRouter(GlobalToolbar)

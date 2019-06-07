import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text } from 'native-base'
import { View } from 'react-native'
import { colors } from '../../constants/colors'

const style = {
  normal: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    borderColor: colors.mediumGray
  }
}

style.selected = {
  ...style.normal,
  borderColor: colors.blue,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2
}

export default class ButtonSelector extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultSelected: PropTypes.string
  };

  state = {
    selected: this.props.defaultSelected
  };

  setSelected = value => {
    this.setState({ selected: value })
    this.props.onChange(value)
  };

  render () {
    const { options } = this.props

    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          marginRight: -10
        }}
      >
        {options.map(option => (
          <Button
            bordered
            title={option}
            onPress={() => this.setSelected(option)}
            style={
              option === this.state.selected ? style.selected : style.normal
            }
            key={option}
          >
            <Text style={{ textAlign: 'center', width: '100%' }}>{option}</Text>
          </Button>
        ))}
      </View>
    )
  }
}

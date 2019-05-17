import React from 'react'
import { View } from 'react-native'
import { Item, Input } from 'native-base'
import PropTypes from 'prop-types'

const Search = props => {
  return (
    <View
      style={{
        marginTop: 5
      }}
    >
      <Item rounded>
        <Input
          clearButtonMode='always'
          placeholder={props.placeholder}
          onChangeText={props.onChange}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 12
          }}
        />
      </Item>
      <View>{props.children}</View>
    </View>
  )
}

Search.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

export default Search

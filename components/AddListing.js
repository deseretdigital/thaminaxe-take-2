import React from 'react'
import GlobalContainer from './reusable/GlobalContainer'
import ButtonSelector from './reusable/ButtonSelector'
import { View } from 'react-native'
import { colors } from '../constants/colors'

export default class AddListing extends React.Component {
  render () {
    return (
      <GlobalContainer>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomColor: colors.lightGray,
            borderBottomWidth: 1
          }}
        >
          <ButtonSelector
            options={['For Sale', 'In Search Of']}
            onChange={value => console.log(value)}
            defaultSelected='For Sale'
          />
        </View>
      </GlobalContainer>
    )
  }
}

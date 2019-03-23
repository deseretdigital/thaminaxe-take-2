import React from 'react'
import { View } from 'react-native'
import { Text, Thumbnail } from 'native-base'
import { colors } from '../constants/colors'
import ListButton from './reusable/ListButton'

export default class Home extends React.Component {
  render () {
    return (
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Thumbnail
            square
            style={{ flex: 1, height: 82, width: 260 }}
            source={require('../assets/logo-ksl-classifieds-dkblue.png')}
          />
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text
            style={{ textAlign: 'center', fontWeight: '500', lineHeight: 22 }}
          >
            Because someone around here has what you need or wants what you
            have.
          </Text>
        </View>
        <ListButton
          to='classifieds'
          text='Classifieds'
          iconLeft='bicycle'
          buttonBGColor={colors.orange}
          textColor={colors.white}
        />
        <ListButton
          to='cars'
          text='Cars'
          iconLeft='car'
          buttonBGColor={colors.orange}
          textColor={colors.white}
        />
        <ListButton
          to='homes'
          text='homes'
          iconLeft='home'
          buttonBGColor={colors.orange}
          textColor={colors.white}
        />
        <ListButton
          to='jobs'
          text='jobs'
          iconLeft='ios-briefcase'
          buttonBGColor={colors.orange}
          textColor={colors.white}
        />
        <ListButton
          to='jobs'
          text='jobs'
          buttonBGColor={colors.lightGray}
          textColor={colors.darkGray}
          rightIconColor={colors.mediumGray}
        />
      </View>
    )
  }
}

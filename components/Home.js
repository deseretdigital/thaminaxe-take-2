import React from 'react'
import { View } from 'react-native'
import { Text, Thumbnail } from 'native-base'
import { colors } from '../constants/colors'
import ListButton from './reusable/ListButton'
import IconButton from './reusable/IconButton'
import GlobalContainer from './reusable/GlobalContainer'

export default class Home extends React.Component {
  render () {
    return (
      <GlobalContainer showBackButton={false} integratedHeader>
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxWidth: '100%',
            paddingTop: 20
          }}
        >
          <IconButton
            to='/add_listing'
            label='Add Listing'
            kslIcon='circle-add'
          />
          <IconButton
            to='/member_saved_search'
            label='Saved Searches'
            kslIcon='floppy-disk'
          />
          <IconButton
            to='/member_favorites'
            label='Favorites'
            kslIcon='heart'
          />
          <IconButton
            to='/member_listings'
            label='My Listings'
            kslIcon='user-normal-weight'
          />
        </View>
      </GlobalContainer>
    )
  }
}

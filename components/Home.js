import React from 'react'
import { View } from 'react-native'
import { Text, Thumbnail } from 'native-base'
import { colors } from '../constants/colors'
import ListButton from './reusable/ListButton'
import IconButton from './reusable/IconButton'
import IconTabs from './reusable/IconTabs'
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
        <IconTabs
          tabs={[
            {
              label: 'General',
              icon: { name: 'ios-bicycle', set: 'Ionicons' },
              to: '/add_listing',
              selected: true
            },
            {
              label: 'Cars',
              icon: { name: 'car', set: 'AntDesign' },
              to: '/member_saved_search'
            },
            {
              label: 'Homes',
              icon: { name: 'house', set: 'KslIcon' },
              to: '/add_listing'
            },
            {
              label: 'Jobs',
              icon: { name: 'briefcase', set: 'FontAwesome' },
              to: '/add_listing'
            },
            {
              label: 'Services',
              icon: { name: 'tools', set: 'Octicons' },
              to: '/add_listing'
            }
          ]}
          backgroundColor={colors.white}
          color={colors.darkGray}
          borderColor={colors.blue}
          selectedBackgroundColor={colors.blue}
          selectedColor={colors.white}
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
            icon={{ name: 'circle-add', set: 'KslIcon' }}
          />
          <IconButton
            to='/member_saved_search'
            label='Saved Searches'
            icon={{ name: 'floppy-disk', set: 'KslIcon' }}
          />
          <IconButton
            to='/member_favorites'
            label='Favorites'
            icon={{ name: 'heart', set: 'KslIcon' }}
          />
          <IconButton
            to='/member_listings'
            label='My Listings'
            icon={{ name: 'user-normal-weight', set: 'KslIcon' }}
          />
        </View>
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
            icon={{ name: 'circle-add', set: 'KslIcon' }}
          />
          <IconButton
            to='/member_saved_search'
            label='Saved Searches'
            icon={{ name: 'floppy-disk', set: 'KslIcon' }}
            iconStyles={{ color: colors.white }}
            labelStyles={{ color: colors.white }}
            backgroundStyles={{
              backgroundColor: colors.blue,
              paddingTop: 5,
              paddingBottom: 5,
              paddingRight: 5,
              paddingLeft: 5
            }}
          />
          <IconButton
            to='/member_favorites'
            label='Favorites'
            icon={{ name: 'heart', set: 'KslIcon' }}
          />
          <IconButton
            to='/member_listings'
            label='My Listings'
            icon={{ name: 'user-normal-weight', set: 'KslIcon' }}
          />
        </View>
      </GlobalContainer>
    )
  }
}

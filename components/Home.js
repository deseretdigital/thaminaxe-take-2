import React from 'react'
import { View } from 'react-native'
import { Text, Thumbnail } from 'native-base'
import { colors } from '../constants/colors'
import ListButton from './reusable/ListButton'
import IconButton from './reusable/IconButton';


import globalStyles from '../styles/global';

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
        <View style={globalStyles.homeFooter}>
          <IconButton to="/add_listing" label="Add Listing"
                      image={require('../assets/button-icons/icon_circle-add.svg')} />
          <IconButton to="/member_saved_search" label="Saved Searches"
                      image={require('../assets/button-icons/icon_savedsearches.svg')}/>
          <IconButton to="/member_favorites" label="Favorites"
                      image={require('../assets/button-icons/icon_heart.svg')}/>
          <IconButton to="/member_listings" label="My Listings"
                      image={require('../assets/button-icons/icon_user.svg')}/>
        </View>
      </View>
    )
  }
}

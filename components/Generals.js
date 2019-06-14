import React from 'react'
import GlobalContainer from './reusable/GlobalContainer'
import Search from './reusable/Search'
import { List, ListItem, Text } from 'native-base'

export default class Generals extends React.Component {
  state = {
    searchText: ''
  };
  render () {
    return (
      <GlobalContainer>
        <Search
          placeholder='Find a specific category or subcategory'
          onChange={searchText => this.setState({ searchText })}
        >
          <List>
            {[1, 2, 3, 4, 5]
              .filter(
                i =>
                  i === Number(this.state.searchText) || !this.state.searchText
              )
              .map(i => (
                <ListItem key={i}>
                  <Text>List Item {i}</Text>
                </ListItem>
              ))}
          </List>
        </Search>
      </GlobalContainer>
    )
  }
}

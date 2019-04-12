import React from 'react'
import Listing from './reusable/Listing'
import GlobalContainer from './reusable/GlobalContainer'

export default class Cars extends React.Component {
  render () {
    return (
      <GlobalContainer>
        {[1, 2, 3, 4, 5].map(i => (
          <Listing key={i} />
        ))}
      </GlobalContainer>
    )
  }
}

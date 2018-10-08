import React from 'react'
import Listing from './reusable/Listing'

export default class Cars extends React.Component {
  render() {
    return [1,2,3,4,5].map(i => <Listing key={i} />)
  }
}
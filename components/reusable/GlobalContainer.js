import React from 'react'
import { Container, Content, Header } from 'native-base'
import GlobalToolbar from './GlobalToolbar'
import { Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window')

export default class GlobalContainer extends React.Component {
  static propTypes = {
    showBackButton: PropTypes.bool,
    integratedHeader: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    showSearch: PropTypes.bool,
    showMenu: PropTypes.bool
  };
  static defaultProps = {
    showBackButton: true,
    integratedHeader: false,
    showCloseButton: false,
    showSearch: true,
    showMenu: true
  };
  render () {
    const containerMargin = width * 0.1
    const contentStyle = {
      marginLeft: containerMargin,
      marginRight: containerMargin
    }
    return (
      <Container>
        <Header
          style={{
            backgroundColor: 'white',
            paddingTop: 23,
            height: 76,
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          <GlobalToolbar
            showBackButton={this.props.showBackButton}
            showBorderAndBG={!this.props.integratedHeader}
            showCloseButton={this.props.showCloseButton}
            showSearch={this.props.showSearch}
            showMenu={this.props.showMenu}
          />
        </Header>
        <Content style={contentStyle}>{this.props.children}</Content>
      </Container>
    )
  }
}

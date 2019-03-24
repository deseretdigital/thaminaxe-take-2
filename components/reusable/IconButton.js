import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-native";
import {Text} from "native-base";
import {Image, View} from 'react-native';

import globalStyles from '../../styles/global';



export default class IconButton extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  };
  static defaultProps = {
    image: require('../../assets/icon.png')
  };
  render() {
    return (
      <View style={globalStyles.iconButton}>
        <Link to={`${this.props.to}`}>
          <View>
            <Image source={this.props.image} style={globalStyles.image} />
            <Text style={globalStyles.iconButton_text}>{this.props.label}</Text>
          </View>
        </Link>
      </View>
    );
  }
}


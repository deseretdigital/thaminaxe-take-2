import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import doStuff from './../actions/doStuff';

class ReduxExample extends React.Component {
  render() {
    const { stuff } = this.props;
    return (
      <View>
        <TouchableHighlight onPress={this.props.doStuff}>
          <Text>Stuff is: {stuff ? 'true' : 'false'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(
    ({ app }) => ({
      stuff: app.stuff
    }),
    (dispatch) => ({
        doStuff: bindActionCreators(doStuff, dispatch),
    })
)(ReduxExample);

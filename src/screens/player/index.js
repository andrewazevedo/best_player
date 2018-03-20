/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Player extends Component {
  render() {
    const { goBack } = this.props.navigation;

    return (
      <View>
        <Text>Player Screen</Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Player;

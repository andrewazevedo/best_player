/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class PlayerList extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>PlayerList Screen</Text>
        <TouchableOpacity onPress={() => navigate('player')}>
          <Text>Player</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default PlayerList;

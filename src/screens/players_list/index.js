/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';

/* Common styles */
import { general } from 'styles';

/* Presentational Components */
import Header from 'components/header';

class PlayerList extends Component {
  static navigationOptions = {
    header: <Header title="Players" />,
  }

  render() {
    return (
      <View style={general.container}>
        <ScrollView contentContainerStyle={general.contentContainer}>
          <Text>Item</Text>
        </ScrollView>
      </View>
    );
  }
}

export default PlayerList;

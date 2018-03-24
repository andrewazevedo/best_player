/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

/* Common styles */
import { general } from 'styles';

/* Presentational Components */
import Header from 'components/header';
import Card from 'components/card';

import data from 'services/data';

class PlayerList extends Component {
  static navigationOptions = {
    header: <Header title="BOOKS" />,
  };

  renderCards = () => (
    data.map(item => (
      <Card
        key={item.id}
        photo={item.medium_image_url}
        title={item.title}
        tagline={item.tagline}
        author={item.author}
      />
    ))
  )

  render() {
    return (
      <View style={general.container}>
        <ScrollView contentContainerStyle={general.contentContainer}>
          {this.renderCards()}
        </ScrollView>
      </View>
    );
  }
}

export default PlayerList;

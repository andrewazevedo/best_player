/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

/* Common styles */
import { general } from 'styles';

/* Presentational Components */
import Header from 'components/header';
import Card from 'components/card';

import data from 'services/data';

class PlayerList extends Component {
  static navigationOptions = {
    header: props => <Header {...props} title="AUDIOBOOKS" />,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  onCardPress = (id) => {
    this.props.navigation.navigate('player', { cardId: id });
  };

  renderCards = () => (
    data.map(item => (
      <Card
        key={item.id}
        id={item.id}
        photo={item.medium_image_url}
        title={item.title}
        tagline={item.tagline}
        author={item.author}
        onCardPress={this.onCardPress}
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

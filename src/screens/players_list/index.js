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

class PlayerList extends Component {
  static navigationOptions = {
    header: <Header title="Players" />,
  }

  render() {
    return (
      <View style={general.container}>
        <ScrollView contentContainerStyle={general.contentContainer}>
          <Card
            photo="https://di07maosdg21o.cloudfront.net/books/books_background/163_chief_customer.site_thumb.jpg?1497471445"
            title="O ponto da virada"
            description="bla bla bla bla bla bla"
            author="Ze ruela"
          />
          <Card
            photo="https://di07maosdg21o.cloudfront.net/books/books_background/163_chief_customer.site_thumb.jpg?1497471445"
            title="O ponto da virada"
            description="bla bla bla bla bla bla"
            author="Ze ruela"
          />
        </ScrollView>
      </View>
    );
  }
}

export default PlayerList;

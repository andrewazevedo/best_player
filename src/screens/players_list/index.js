/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks } from 'redux/actions';

/* Common styles */
import { general } from 'styles';

/* Presentational Components */
import Header from 'components/header';
import Card from 'components/card';

class PlayerList extends Component {
  static navigationOptions = {
    header: props => <Header {...props} title="AUDIOBOOKS" />,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.arr.isRequired,
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

  onCardPress = (id) => {
    this.props.navigation.navigate('player', { cardId: id });
  };

  renderCards = () => {
    const { books } = this.props;

    if (!books) {
      return null;
    }

    return (
      books.map(item => (
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
    );
  }

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

const mapStateToProps = ({ booksReducer }) => {
  const { books } = booksReducer;
  return { books };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBooks,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);

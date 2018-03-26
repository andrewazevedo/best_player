/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from 'styles';
import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    goBack: PropTypes.bool,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  }

  static defaultProp = {
    goBack: false,
  }

  renderGoBackButton = () => (
    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
      <Icon
        name="ios-arrow-back"
        size={25}
        color={colors.white}
        style={styles.icon}
      />
    </TouchableOpacity>
  )

  render() {
    const { container, headerTitle } = styles;
    const { title, goBack } = this.props;
    console.log(this.props);

    return (
      <View style={[container, goBack ? { justifyContent: 'space-between' } : { justifyContent: 'center' } ]}>
        {
          goBack
          ? this.renderGoBackButton()
          : null
        }

        <Text style={headerTitle}>{title}</Text>

        <View style={styles.icon} />
      </View>
    );
  }
}

export default Header;

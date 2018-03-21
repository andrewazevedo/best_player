/* @flow weak */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ title }) => {
  const { container, headerTitle } = styles;

  return (
    <View style={container}>
      <Text style={headerTitle}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

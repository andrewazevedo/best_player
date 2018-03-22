import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Card = ({
  photo,
  title,
  description,
  author,
}) => {
  const {
    container,
    imgContainer,
    infoContainer,
    descriptionText,
  } = styles;

  return (
    <View style={container}>
      <Image
        style={imgContainer}
        source={{ uri: photo }}
      />
      <View style={infoContainer}>
        <Text>{title}</Text>
        <Text style={descriptionText}>{description}</Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
};

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Card;

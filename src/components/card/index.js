import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Card = ({
  photo,
  title,
  tagline,
  author,
}) => {
  const {
    container,
    imgContainer,
    infoContainer,
    titleText,
    taglineText,
    authorText,
  } = styles;

  return (
    <TouchableOpacity style={container}>
      <Image
        style={imgContainer}
        source={{ uri: photo }}
      />
      <View style={infoContainer}>
        <Text style={titleText}>
          {title}
        </Text>
        <Text style={taglineText}>{tagline}</Text>
        <Text style={authorText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Card;

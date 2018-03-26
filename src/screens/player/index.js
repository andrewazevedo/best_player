/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Foundation';

import data from 'services/data';

import { formatedTime } from 'utils';

import { general, colors } from 'styles';
import styles from './styles';

class Player extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.object.isRequired,
      params: PropTypes.object,
    }).isRequired,
  }

  state = {
    cardData: [],
    playing: true,
    muted: false,
    shuffle: false,
    sliding: false,
    currentTime: 0,
  }

  componentWillMount() {
    const { cardId } = this.props.navigation.state.params;
    const cardData = data.filter(item => item.id === cardId);
    this.setState({ cardData: cardData[0] });
  }

  onEnd = () => {
    this.setState({ playing: false });
  }

  onSlidingComplete = () => {
    this.audio.seek(this.state.currentTime);
    this.setState({ sliding: false });
  }

  onSlidingChange = (value) => {
    const newPosition = value * this.state.songDuration;
    this.setState({ currentTime: newPosition });
  }

  onSlidingStart = () => {
    this.setState({ sliding: true });
  }

  onLoad = (params) => {
    this.setState({ songDuration: params.duration });
  }

  setTime = (params) => {
    if (!this.state.sliding) {
      this.setState({ currentTime: params.currentTime });
    }
  }

  togglePlay = () => {
    this.setState({ playing: !this.state.playing });
  };

  playButton = () => {
    if (this.state.playing) {
      return (
        <Icon onPress={this.togglePlay} name="pause" size={90} color={colors.dark} />
      );
    }

    return (
      <Icon onPress={this.togglePlay} name="play-circle" size={90} color={colors.dark} />
    );
  }

  render() {
    const card = this.state.cardData;

    let songPercentage;
    if (this.state.songDuration !== undefined) {
      songPercentage = this.state.currentTime / this.state.songDuration;
    } else {
      songPercentage = 0;
    }

    return (
      <View style={general.container}>
        <Video
          source={{ uri: card.audio_url }}
          ref={(c) => { this.audio = c; }}
          muted={false}
          paused={!this.state.playing}
          onLoad={params => this.onLoad(params)}
          onProgress={time => this.setTime(time)}
          onEnd={this.onEnd}
          resizeMode="cover"
          repeat={false}
        />

        <View style={styles.bookImageContainer}>
          <View style={styles.bookContent}>
            <Image style={styles.bookImage} source={{ uri: card.medium_image_url }} />
            <View style={styles.bookTitleContainer}>
              <Text style={styles.bookTitle}>
                {card.title}
              </Text>
              <Text style={styles.bookSubtitle}>
                {card.author}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.timerContainer}>
          <Text>{formatedTime(this.state.songDuration - this.state.currentTime)}</Text>

          <Slider
            onSlidingStart={this.onSlidingStart}
            onSlidingComplete={this.onSlidingComplete}
            onValueChange={this.onSlidingChange}
            minimumTrackTintColor='#851c44'
            style={styles.slider}
            trackStyle={styles.sliderTrack}
            thumbStyle={styles.sliderThumb}
            value={songPercentage}
          />

          <Text>{formatedTime(this.state.songDuration)}</Text>

          {/* <View style={styles.timeInfo}>

          </View> */}
        </View>
        <View style={styles.playerContainer}>
          {this.playButton()}
        </View>
      </View>
    );
  }
}

export default Player;

import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  bookImageContainer: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  bookContent: {
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  bookImage: {
    width: metrics.screenWidth * 0.6,
    height: metrics.screenHeight * 0.3,
    borderRadius: 5,
  },
  bookTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth * 0.6,
    paddingTop: 20,
  },
  bookTitle: {
    textAlign: 'center',
    fontSize: fonts.big,
    color: colors.black,
  },
  bookSubtitle: {
    paddingTop: 20,
    fontSize: fonts.regular,
    fontStyle: 'italic',
    color: colors.dark,
  },

  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    backgroundColor: colors.white,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  slider: {
    height: 20,
    width: metrics.screenWidth * 0.6,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#f62976',
    borderRadius: 10 / 2,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  },

  playerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
  },
});

export default styles;

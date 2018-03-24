import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.lighter,
    marginBottom: 25,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 2,
    borderRadius: 5,
  },
  imgContainer: {
    height: 150,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    backgroundColor: colors.white,
    padding: 10,
  },
  titleText: {
    paddingBottom: 5,
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.black,
  },
  taglineText: {
    paddingBottom: 5,
    color: colors.black,
  },
  authorText: {
    fontStyle: 'italic',
    color: colors.grey,
  },
});

export default styles;

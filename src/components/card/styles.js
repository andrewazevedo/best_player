import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

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
  },
  imgContainer: {
    height: 150,
  },
  infoContainer: {
    backgroundColor: colors.lighter,
    padding: 10,
  },
  descriptionText: {
    color: colors.white,
  },
});

export default styles;

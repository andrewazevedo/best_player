import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: metrics.headerHeight,
    width: metrics.screeWidth,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.backgroundHeader,

    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  headerTitle: {
    fontSize: fonts.medium,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;

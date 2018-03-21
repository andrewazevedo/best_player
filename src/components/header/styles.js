import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: metrics.headerHeight,
    width: metrics.screeWidth,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.white,
  },
  headerTitle: {
    fontSize: fonts.big,
    color: colors.dark,
  },
});

export default styles;

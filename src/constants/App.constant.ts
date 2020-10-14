/*
 * platform/application wide constants
 */

import {Platform, StatusBar, Dimensions} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const platform = Platform.OS;
const {width, height} = Dimensions.get('window');

export default {
  width,
  height,
  aspectRatio: width / height,
  isLandscape: width > height,
  topPadding: platform === 'ios' ? 34 : 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: platform === 'ios' ? 54 : 66,
  statusBarHeight:
    platform === 'ios' ? (hasNotch() ? 34 : 10) : StatusBar.currentHeight,
};

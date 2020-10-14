/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

console.ignoredYellowBox = ['Require cycle: node_modules/react-native-paper'];

AppRegistry.registerComponent(appName, () => App);

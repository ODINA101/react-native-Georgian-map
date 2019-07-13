/**
 * @format
 */
console.disableYellowBox = true;
import {AppRegistry} from 'react-native';
import App from './components/router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

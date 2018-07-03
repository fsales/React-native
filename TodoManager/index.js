import { AppRegistry } from 'react-native';
//import App from './App';
//import Login from './src/screen/Login'
//import Register from './src/screen/Register'
import {Routes} from './src/services/Router';
import { initializeFirebaseApi } from './src/services/FirebaseApi';

AppRegistry.registerComponent('TodoManager', () =>{
   initializeFirebaseApi();
   return Routes
});

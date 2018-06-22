import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from '../../App';
import Login from '../screen/Login';
import Register from '../screen/Register';

export const Routes = StackNavigator({
    App: { screen: App },
    Login: { screen: Login },
    Register: { screen: Register }
},
{
    headerMode: 'screen'
});
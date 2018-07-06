//import React from 'react';
import { createStackNavigator, createTabNavigator } from 'react-navigation';
//import App from '../../App';
//import Login from '../screen/Login';
//import Register from '../screen/Register';
import {Login, Register, ToDoTasks, DoneTasks} from '../screen/Screens' 

const pageTaskList = createTabNavigator({
    pageTodoTasks:  { screen: ToDoTasks },
    pageDoneTasks: { screen: DoneTasks }
});

export const Routes = createStackNavigator({
    pageLogin: { screen: Login },
    pageRegister: { screen: Register },
    pageTaskList: {
        screen: pageTaskList
    }
},
{
    headerMode: 'screen'
});
import React, {Component} from 'react';
import {Image, 
    StyleSheet, 
    View} from 'react-native';

const IMG_CHECK_LIST = require('../assets/checklist.png');

export default class DoneTasks extends Component{

    static navigationOptions = {
        tabBarLabel: 'ToDo',
        tabBarIcon: ({ }) =>{
            <Image source = {IMG_CHECK_LIST} style = {[STYLES.icon, {tintColor}]} />
        }
    }

    render() {
        return (
            <View style = {STYLES.container} />
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    },
    icon: {
        width: 26,
        height: 26
    },
    img: {
        width: 50,
        height: 50
    },
    
});
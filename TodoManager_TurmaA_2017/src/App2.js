/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
  
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
           <Text style={styles.bigBlue} >Big</Text>
           <Text style={styles.smallRed} >Casa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

      container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },

      bigBlue:{
        color: 'blue',
        fontSize: 50
      },

      smallRed:{
        color: "pink",
        fontSize: 60
      }

});
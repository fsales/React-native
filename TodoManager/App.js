/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.loading}/>
            </View>
        );
    }
    componentDidMount() {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loading: {
    width: 50,
    height: 50
  }
});

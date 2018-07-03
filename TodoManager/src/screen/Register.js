import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from 'react-native';
import {NavigationActions} from 'react-navigation'
import styles from './styles';
import {createUserOnFirebaseAsync} from '../services/FirebaseApi'



const img = require('../assets/logo.jpeg');

export default class Register extends Component {

    static navigationOptions = {
        title: 'Register'
    };

    constructor(props){
      super(props)

      this.state = { email: '', password: '' };
    }
  
    render() {
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding">

            <SafeAreaView style={styles.container}>

                <View style={styles.topView}>

                    <Image
                      source= {img}
                      style= {styles.imageMin} />

                    <Text style={styles.topText}>Registering new user</Text>
                </View>

                <View style= {styles.form}>

                  <TextInput 
                      autoCapitalize = "none"
                      autoCorrect = {false}
                      placeholder = "E-mail"
                      style = {styles.input}
                      underlineColorAndroid = "rgba(0, 0, 0, 0)"
                      value={this.state.email}
                      onChangeText={email => this.setState({ email })}
                  />

                  <TextInput
                      autoCapitalize = "none"
                      autoCorrect = {false}
                      placeholder = "Password"
                      style = {styles.input}
                      underlineColorAndroid = "rgba(0, 0, 0, 0)"
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                      secureTextEntry={true}
                  />
                  

                  <Button title='Register User' style={styles.button}
                            onPress={async () => await this.createUserAsync()} />


                </View>

            </SafeAreaView>

          </KeyboardAvoidingView>
        );
      }

      async createUserAsync() {
        try {
            const user = await createUserOnFirebaseAsync(
                this.state.email,
                this.state.password
            );
            const message = `User ${user.email} has been created!`;
            Alert.alert('User Created', message,
                [
                    {
                        text: 'Ok', onPress: () => {
                            // const backAction = NavigationActions.back();
                            // this.props.navigation.dispatch(backAction);
                            this.props.navigation.goBack();
                        }
                    }
                ]);
        } catch (error) {
            Alert.alert('Create User Failed', error.message);
        }
    }

}
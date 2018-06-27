import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import styles from './styles';



const img = require('../assets/logo.jpeg');

export default class Register extends Component {

    static navigationOptions = {
        title: 'Register'
    };

    constructor(props){
      super(props)

      this.state = {
        email: '',
        senha: '',
      }

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
                      placeholder = "Senha"
                      style = {styles.input}
                      underlineColorAndroid = "rgba(0, 0, 0, 0)"
                      value={this.state.senha}
                      onChangeText={senha => this.setState({ senha })}
                      secureTextEntry
                  />
                  

                  <TouchableOpacity onPress={() => {}} style={styles.button}>
                      <Text style={styles.buttonText}>REGISTER USER</Text>
                  </TouchableOpacity>

                  

                </View>

            </SafeAreaView>

          </KeyboardAvoidingView>
        );
      }
}
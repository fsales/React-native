import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';



const img = require('./assets/logo.jpeg');

export default class Register extends Component {

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
                      style= {styles.image} />

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    topView: {
      flex: 0.2,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 25,
    },
    topText:{
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 20,
    },
    image:{
      width: 50,
      height: 50,
    },
    form:{
      flex: 1,
      flexDirection: 'column',
      marginTop: 20,
    },
    input:{
      marginHorizontal: 30,
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderBottomColor: '#47525e',
      borderBottomWidth: 0.5,
    },
    button: {
      marginHorizontal: 30,
      backgroundColor: '#47525e',
      borderRadius: 5,
      alignSelf: 'stretch',
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 16,
    },
   
  });
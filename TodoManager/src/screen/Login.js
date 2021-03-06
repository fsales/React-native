import React, { Component } from 'react';
import { SafeAreaView, 
    KeyboardAvoidingView, 
    View, 
    Image, 
    TextInput, 
    Button, 
    Text, 
    Alert } from 'react-native';
import styles from './styles';
import { signInOnFirebaseAsync } from '../services/FirebaseApi';
import { StackActions, NavigationActions } from 'react-navigation';

const img = require('../assets/TodoList.png');

export default class Login extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            email: props.email
        };
    }
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>  
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    
                        
                        <View style={styles.topView}>
                            <Image 
                                style={styles.img} 
                                source={img} />
                        </View>

                        <View style={styles.form}>
                            
                            <TextInput 
                                style={styles.input}
                                value={this.state.email}
                                placeholder='Email'
                                keyboardType={'email-address'}
                                autoCapitalize='none'
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                onChangeText={(text) => this.setState({ email: text })} />
                            
                            <TextInput 
                                style={styles.input}
                                placeholder='Password'
                                secureTextEntry={true}
                                underlineColorAndroid = "rgba(0, 0, 0, 0)"
                                onChangeText={(password) => this.setState({ password })} />
                            
                            <Button 
                                title='Sign In'
                                onPress={async () => await this.signInAsync()}
                                style={styles.button}
                                />

                            <View style={styles.textConteiner}>
                                <Text>Not a member? Let's </Text>
                                <Text style={styles.textRegister}
                                    onPress = { () => this.props.navigation.navigate('pageRegister') }>
                                    Register
                                </Text>
                            </View>
                        </View>
                    
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }

    async signInAsync() {
        try {
            const user = await signInOnFirebaseAsync(
                this.state.email,
                this.state.password
            );
           // const message = `User ${user.email} authenticated`;
           // Alert.alert('User Authenticated', message);
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'pageTaskList' })],
              });
              this.props.navigation.dispatch(resetAction);
        } catch (error) {
            Alert.alert('Login Failed', error.message);
        }
    }

}


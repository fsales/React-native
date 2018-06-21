import React, {Component} from 'react';
import {
        KeyboardAvoidingView,
        StyleSheet,
        SafeAreaView,
        Image,
        TextInput,
        Button,
        View,
        Text
        
        } from 'react-native';

const IMG = require('../assets/TodoList.png')

export default class Login extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <SafeAreaView style = {[STYLE.content]} >
            
                <Image 
                        source = {IMG} 
                        style = {[STYLE.img]}/>

                <TextInput 
                            placeholder = "Email"
                            />
                <TextInput 
                            placeholder = "Password"/>

                <View style = {STYLE.view}>
                <Button 
                        title = "Sing In" 
                       style = {STYLE.button}
                       />
                </View>

                
            </SafeAreaView>
        );
    }
}

const STYLE = StyleSheet.create({
    content:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin:10
    },
    img:{
        
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    button: {
        flexDirection: 'row',
        margin: 40
    },
    view:{
        backgroundColor: 'blue' 
    }

});
import React from  'react';
import {View, StyleSheet} from 'react-native'

export default class App extends React.Component{

    render(){

        return (
            <View style={[styles.main]} >
               <View ref="firts" style={[styles.main2, styles.commons]} >
                
                   <View style={[styles.subView]} >

                   </View>
                   <View style={[styles.subView]}>

                   </View>
                   <View style={[styles.subView]}>

                   </View>
               </View>

               <View ref="firts" style={[styles.main3, styles.commons]}>
                
                    <View style={[styles.subView]}>

                    </View>
                    <View style={[styles.subView]}>

                   </View>
                   <View style={[styles.subView]}>

                   </View>
               </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    main:{
        flex: 2,
        
    },
    main2:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    main3:{
        flex: 1,
        justifyContent: 'space-between'
        
    },
    commons:{
        margin: 40,
        borderColor: 'red',
        borderWidth: 1
    },
    subView:{
        height: 50,
        width: 50,
        backgroundColor: 'blue' 
    }

});



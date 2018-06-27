import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    topView: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        marginTop: 15,
    },
    topText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    form:{
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
    },
    img: {
        width: 200,
        height: 200
    },
    imageMin:{
        width: 50,
        height: 50,
    },
    bottomView: {
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginHorizontal: 30,
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderBottomColor: '#47525e',
      borderBottomWidth: 0.5,
    },
    textConteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegister: {
        fontWeight: 'bold'
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

export default styles; 
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    inputContainer: {
      borderRadius: 4,
      borderWidth: 1.5,
      borderColor: '#a6a6a6',
      height: 50,
      marginBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 5,
    },

    input: {
      height: 50,
      marginLeft: 10,
      flex: 1,
      fontFamily: 'Poppins',
      fontSize: 18
    },

    inputIcon: {
      marginLeft: 5,
    },

    textContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 5
    },

    line: {
      borderWidth: 1, 
      borderColor: '#a9a9a9', 
      height: 0, 
      width: 30
    },

    /* input: {
        height: 50,
        borderWidth: 2,
        borderColor: '#4bc1bc',
        fontFamily: 'Poppins',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        borderRadius: 4,
        fontSize: 18
    },*/ 
    button: {
        flexDirection: 'row',
        //paddingVertical: 20,
        marginHorizontal: 5,
        marginVertical: 7,
        
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 23,
        fontFamily: 'Poppins',
    },
    formLabel: {
      fontSize: 18,
      color: 'rgb(25, 31, 76)',
      marginHorizontal: 5,
      marginBottom: 5
    },

    signIn: {
        flexDirection: 'column',
        paddingVertical: 10, 
        backgroundColor: 'rgb(25, 31, 76)',
        alignItems: 'center',
    }       
})


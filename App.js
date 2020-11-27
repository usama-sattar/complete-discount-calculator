import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>
            Amount: 
          </Text>
        <TextInput 
          style={styles.input}
          placeholder= 'Enter Original Amount'
        /> 
        <Text  style={styles.title}>
          Discount %  
        </Text> 
        <TextInput
          style={styles.input}
          placeholder= 'Enter % discount'
        />
        </View>
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'cyan'
  },
  inputContainer:{
    borderColor:'blue'
  },
  input:{
    width: 200,
    height: 40,
    backgroundColor: 'pink',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    paddingLeft: 4
  },
  title:{
    color : 'purple',
    fontSize: 20,
    marginTop: 20
  }
})
export default App;
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions, Button, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import {RFValue} from "react-native-responsive-fontsize"
import * as Font from "expo-font";
import AppHeader from '../components/AppHeader'

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      dropDownHeight: 40,
      buttonState: 'normal',
      transactionMessage:'',
      assignmentName:'',
      assignmentDueDate:''
    }
  }
    render() {
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View>
          <AppHeader/>
            </View>
            <View style={styles.inputView}>
            <TextInput
            style={styles.inputBox}
            placeholder="Assignment Name"
            onChangeText={text=>this.setState({assignmentName:text})}/>
            <TextInput
            style={styles.inputBox}
            placeholder="Assignment Due Date"
            onChangeText={text=>this.setState({assignmentDueDate:text})}/>
            </View>
            <TouchableOpacity
            style={styles.submitButton}
            onPress={async()=>{
              var transactionMessage=this.handleTransaction();
              this.setState({
                assignmentName:'',
                assignmentDueDate:''
              })
            }}>
            <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles= StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
inputView:{
  margin:20
},
inputBox:{
  width:200,
  height:40,
  borderWidth:1.5,
  borderRightWidth:0,
  fontSize:20
},
submitButton:{
  backgroundColor:'#FBC02D',
  width:100,
  height:50
},
submitButtonText:{
  padding:10,
  textAlign:'center',
  fontSize:20,
  fontWeight:"bold",
  color:"white"
}
})
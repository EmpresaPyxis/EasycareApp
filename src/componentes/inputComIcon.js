import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather';

export default class InputComIcon extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.inputContainer}>
        <TouchableWithoutFeedback>
          <Icon style={styles.icon} name={this.props.icon} size={20} color="#666" />
        </TouchableWithoutFeedback>
        <TextInput
          style={[styles.input, this.props.style]}
          placeholderTextColor="#666"
          returnKeyType={this.props.returnKeyType}
          autoCapitalize={this.props.autoCapitalize}
          autoCompleteType={this.props.autoCompleteType}
          keyboardType={this.props.keyboardType}
          blurOnSubmit={this.props.blurOnSubmit}
          ref={this.props.ref}
          {...this.props}>
        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: 'rgba(70,70,70, 0.31)',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    marginTop: 25,
    flexDirection: 'row'
  },

  icon: {
    alignSelf: 'center',
    paddingRight: 20,
    marginLeft: 10,
    color: 'rgba(0,0,0,0.7)'
  },

  input: {
    fontSize: 16,
    color: '#666',
    flex: 1
  }
  
})
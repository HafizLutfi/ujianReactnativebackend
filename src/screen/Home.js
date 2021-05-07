import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Picker>
          <Picker.Item label="Name" value="Name" />
          <Picker.Item label="Email" value="Email" />
          <Picker.Item label="Phone" value="Phone" />
          <Picker.Item label="Address" value="Address" />
        </Picker>
        <TextInput />
        <TouchableOpacity
          style={{
            marginLeft: 300,
            marginRight: 30,
            backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

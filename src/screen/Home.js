import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>pilih</Text>

        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

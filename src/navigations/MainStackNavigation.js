import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screen/List';
import Update from '../screen/Update';
import Register from '../screen/Register';

const Stack = createStackNavigator();
export class MainStackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    );
  }
}
export class RegisterStackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
}

export default {MainStackNavigation, RegisterStackNavigation};

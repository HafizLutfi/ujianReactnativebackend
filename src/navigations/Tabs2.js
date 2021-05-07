import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register from '../screen/Register';
import List from '../screen/List';
import Home from '../screen/Home';

const Tab = createBottomTabNavigator();
export class Tabs2 extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    );
  }
}

export default Tabs2;

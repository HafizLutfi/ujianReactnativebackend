import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Register from '../screen/Register';

const Tab = createBottomTabNavigator();
export class Tabs2 extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    );
  }
}

export default Tabs2;

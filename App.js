import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import Tabs2 from './src/navigations/Tabs2';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs2 />
      </NavigationContainer>
    );
  }
}

export default App;

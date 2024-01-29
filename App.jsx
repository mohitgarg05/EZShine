import React from 'react';
import { Text, View } from 'react-native';
import LaunchNav from './src/navigations/LaunchNav';
import { NavigationContainer } from '@react-navigation/native';


function App(){

  return (
    <NavigationContainer>
      <LaunchNav />
    </NavigationContainer>
  );
}


export default App;

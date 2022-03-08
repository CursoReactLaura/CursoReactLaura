/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * Practica 3. Estado 1
 */

import React from 'react';
import { Text, View } from 'react-native';


function App() {
  const state = {
      year : 2016,
      name: 'Nader Dabit',
      colors: ['blue']

  }
  return (
    <View>
      <Text> My name is: {state.name} </Text>
      <Text> My name is: {state.name} </Text>
      <Text> The year is: {state.year}</Text>
      <Text> My colors are {state.colors[0]}</Text>
    </View>
  );
}

export default App;

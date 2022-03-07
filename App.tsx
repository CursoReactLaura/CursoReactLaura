/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

const Button = () => (
  <TouchableHighlight style={{ borderColor: "red"}}>
    <Text>Hello World =) </Text>
  </TouchableHighlight>
)

function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>
        Ahora es una prueba online de Laura con botones :)
      </Text>
    </View>
  );
}

export default App;

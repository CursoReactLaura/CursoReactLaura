/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * Practica 3. Estado 3
 */

import React, { useState } from 'react';
import { Text, View } from 'react-native';


function App() {
 
  //Valores por defecto
  const state = {
      year: 2022,
      name: 'Laura',
      colors: ['Verde']

  }
  //Hook de react que te permite usar el estado
  //Al ejecutar el código y seleccionar el año se va 
  //incrementando partiendo del valor inicial 2022 +1
  const [year, updateYear] = useState(2022);
  return (
    <View>
      <Text> The year is: {state.year}</Text>
      <Text> My name is: {state.name} </Text>
      <Text onPress= { () => updateYear(year +1) }> My year is: {year} </Text>
      <Text> My colors are {state.colors[0]}</Text>
    </View>
  );
}

export default App;

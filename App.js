//Libraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Views
import Gretting from './src/views/Register/Gretting';
import DataAccount from './src/views/Register/DataAccount';
import DataPhone from './src/views/Register/DataPhone';
import SignSuccess from './src/views/Register/SignSuccess';


const Stack = createStackNavigator();

function StackRegister() {
  return(  
    <Stack.Navigator>
      <Stack.Screen name='Gretting' component={Gretting} />
      <Stack.Screen name='DataAccount' component={DataAccount} />
      <Stack.Screen name='DataPhone' component={DataPhone} />
      <Stack.Screen name='SignSuccess' component={SignSuccess} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackRegister/>
    </NavigationContainer>
  );
}

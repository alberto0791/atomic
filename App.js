//Libraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Views
import Gretting from './src/Register/Gretting';
import DataAccount from './src/Register/DataAccount';
import DataPhone from './src/Register/DataPhone';
import SignSuccess from './src/Register/SignSuccess';


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

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './screen/Homepage';
import FlightSchedule from './screen/FlightSchedule';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }}/>
        <Stack.Screen name="FlightSchedule" component={FlightSchedule} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screen/screen1';
import routes from '../assets/routes';
import Screen2 from '../screen/screen2';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen component={Screen1} name={routes.screen1.path} />
        <Stack.Screen component={Screen2} name={routes.screen2.path} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

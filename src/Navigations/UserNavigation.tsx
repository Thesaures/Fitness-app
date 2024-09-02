import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../Screens/introduction';
import BottomTabNavigation from './BottomNavigation';
import Slider from '../Screens/slider';
import Noification from '../Screens/notification';
import Workout from '../Screens/Workout';
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Slider"
        component={Slider}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Noification"
        component={Noification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;

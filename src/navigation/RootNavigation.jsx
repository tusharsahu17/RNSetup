import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import { THEME } from '../utils/theme';
import { ROUTES } from './routes';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        creenOptions={{
          headerStyle: { backgroundColor: THEME.THEME_COLOUR },
          animation: 'slide_from_right',
          headerTitleStyle: {
            color: THEME.COLOR_WHITE,
          },
          orientation: 'portrait',
          headerTintColor: THEME.COLOR_WHITE,
          headerBackTitleVisible: false,
        }}
        initialRouteName={ROUTES.login}
      >
       
        <Stack.Screen
          name={ROUTES.login}
          component={Login}
          options={{
            title: 'Login',
            headerShown: false,
          }} />
        <Stack.Screen
          name={ROUTES.signup}
          component={Signup}
          options={{
            title: 'Signup',
            headerShown: false,
          }} />
         <Stack.Screen
          name={ROUTES.drawer}
          component={DrawerNavigation}
          options={{
            title: 'Drawer',
            headerShown: false,
          }} />

      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});

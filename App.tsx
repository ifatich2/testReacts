import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Smartlook, { Properties } from 'react-native-smartlook-analytics';

import PageScreen from './page/pageScreen';
import TwoScreen from './page/twoScreen';

Smartlook.instance.preferences.setProjectKey('fe3887f3e1f6a2272583d9c182fdae9c7c531d45');
Smartlook.instance.start();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="pageScreen" component={PageScreen} options={{ title: 'pageScreen' }} />
        <Stack.Screen name="twoScreen" component={TwoScreen} options={{ title: 'twoScreen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import MainMovie from './src/components/Main/MainMovie';
import postMovie from './src/components/postMovie/postMovie';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            options={{headerShown: false}}
            name="home"
            component={MainMovie}
          />
          <Stack.Screen name="Details" component={postMovie} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

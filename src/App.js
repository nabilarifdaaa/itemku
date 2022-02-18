import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <Router />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;

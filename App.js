/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { AppRouter } from './src/AppRouter.js';
import { AuthContextProvider } from './src/context/AuthContext.js';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <AuthContextProvider >
      <AppRouter />

    </AuthContextProvider>
  );
}



export default App;

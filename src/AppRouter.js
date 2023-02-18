import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './navigators/AuthNavigator.js';
import { AppNavigator } from './navigators/AppNavigator.js';
import { useAuth } from './context/AuthContext.js';

export const AppRouter = () => {
    const { authData } = useAuth();

    return (
        <NavigationContainer>
            {authData ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

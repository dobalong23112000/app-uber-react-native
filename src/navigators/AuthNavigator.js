import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from "../pages/AuthPage/Login.js";
import { Slider } from "../pages/AuthPage/Slider.js";

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="ThirdScreen" >
            <Stack.Screen
                name="Slider"
                component={Slider}
            />
           
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>

)
}

import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from '../pages/Home';
// import Account from '../pages/Account';
// import { Notification } from '../pages/Notification';

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
const Account = () => {
    return (
        <View>
            <Text>Account</Text>
        </View>
    )
}
const Notification = () => {
    return (
        <View>
            <Text>Notification</Text>
        </View>
    )
}
const Tab = createBottomTabNavigator();
const ContainerStack = createNativeStackNavigator();



const MainTabScreen = ({ navigation }) => {

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Trang chủ') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                } else if (route.name === 'Trang cá nhân') {
                    iconName = focused ? 'ios-person' : 'ios-person-outline';
                } else if (route.name === 'Thông báo') {
                    iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
                } else if (route.name === 'Menu') {
                    iconName = focused ? 'ios-menu' : 'ios-menu-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'brown',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Trang chủ" component={Home} options={{
                headerShown: true,
                headerLeft: () => (
                    <Ionicons name="ios-menu-outline" onPress={() => navigation.openDrawer()} color={"#000"} style={{ marginLeft: 20 }} size={25} />
                ),
                headerRight: () => (
                    <Ionicons name="ios-notifications-outline" color={"#000"} style={{ marginRight: 20 }} size={25} />
                ),
                headerTitle: "Trang chủ",
                headerStyle: { backgroundColor: "#FFCC33" }

            }} />
            <Tab.Screen name="Trang cá nhân" component={Account} options={{
                headerShown: true,
                headerLeft: () => (
                    <Ionicons name="ios-menu-outline" onPress={() => navigation.openDrawer()} color={"#000"} style={{ marginLeft: 20 }} size={25} />
                ),
                headerRight: () => (
                    <Ionicons name="ios-notifications-outline" color={"#000"} style={{ marginRight: 20 }} size={25} />
                ),
                headerTitle: "Trang cá nhân",
                headerStyle: { backgroundColor: "#FFCC33" }
            }} />
            <Tab.Screen name="Thông báo" component={Notification} options={{
                headerShown: true,
                headerLeft: () => (
                    <Ionicons name="ios-menu-outline" onPress={() => navigation.openDrawer()} color={"#000"} style={{ marginLeft: 20 }} size={25} />
                ),
                headerRight: () => (
                    <Ionicons name="ios-notifications-outline" color={"#000"} style={{ marginRight: 20 }} size={25} />
                ),
                headerTitle: "Thông báo",
                headerStyle: { backgroundColor: "#FFCC33" }
            }} />
            <Tab.Screen name="Menu" component={Notification} options={{
                headerShown: true,
                headerLeft: () => (
                    <Ionicons name="ios-menu-outline" onPress={() => navigation.openDrawer()} color={"#000"} style={{ marginLeft: 20 }} size={25} />
                ),
                headerRight: () => (
                    <Ionicons name="ios-notifications-outline" color={"#000"} style={{ marginRight: 20 }} size={25} />
                ),
                headerTitle: "Menu",
                headerStyle: { backgroundColor: "#FFCC33" }
            }} />
        </Tab.Navigator>

    )
}
function ContainerNavigator() {
    return (
        <ContainerStack.Navigator >
            <ContainerStack.Screen
                name="MainTabScreen"
                component={MainTabScreen}
                options={{
                    headerShown: false,
                }}
            />

        </ContainerStack.Navigator>
    )
}

export default ContainerNavigator
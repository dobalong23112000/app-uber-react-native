import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Dimensions
} from "react-native";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import ContainerNavigator from "./ContainerNavigator";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContainerNavigator from "./ContainerNavigator";
import { useAuth } from "../context/AuthContext";
// import CameraScreen from "../pages/CameraScreen";

const Drawer = createDrawerNavigator();

const Menu = () => {
  const { setAuthData, authData } = useAuth();

  return (
    <View>
      <View style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 35,
              width: '100%',
            },
          ]}
        >
          {(
            <TouchableOpacity
              onPress={() => {
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* <Image source={require('../assets/images/avatar.png')} style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }} /> */}
            </TouchableOpacity>
          )}
          <Text style={{ padding: 10 }}>
            User
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
            }}
          >
            {(
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  margin: 10,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  marginTop: 15,
                }}
                onPress={() => { }}
              ></TouchableOpacity>
            )}
            {(
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  margin: 10,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  marginTop: 10,
                }}

              >
                <View style={{ width: 30 }}>
                  <Ionicons name="ios-key-outline" size={20} style={{
                    width: 20,
                    height: 20,
                  }} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: Dimensions.get('screen').width - 140,
                  }}
                >
                  <Text style={{}}>Sự kiện</Text>
                </View>
              </TouchableOpacity>
            )}
            {(
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  margin: 10,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                }}
              >
                <View style={{ width: 30 }}>
                  <Ionicons name="md-lock-closed-outline" size={20} style={{
                    width: 20,
                    height: 20,
                  }} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: Dimensions.get('screen').width - 140,
                  }}
                >
                  <Text style={{}}>Đổi mật khẩu</Text>
                </View>
              </TouchableOpacity>

            )}
            {(
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  margin: 10,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  setAuthData(false)
                }}
              >
                <View style={{ width: 30 }}>
                  <Ionicons name="md-lock-closed-outline" size={20} style={{
                    width: 20,
                    height: 20,
                  }} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: Dimensions.get('screen').width - 140,
                  }}
                >
                  <Text style={{}}>Đăng xuất</Text>
                </View>
              </TouchableOpacity>

            )}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();
export const AppNavigator = ({ navigation }) => {
  const MyDrawer = () => {
    return (
      <Drawer.Navigator drawerContent={props =>
        (<Menu />)
      }
      >
        <Drawer.Screen name="ContainerNavigator" component={ContainerNavigator} options={{
          headerShown: false,
        }} />

      </Drawer.Navigator>
    );
  }
  return (
    <>
      <>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName="Drawer" >
          <Stack.Screen name="Drawer" component={MyDrawer} />
          <Stack.Screen
            name="camera"
            component={() => {
              return (<View><Text>AAA</Text></View>)
            }}
            options={{
              headerShown: true,
              title: "",
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </>
      {/* <>
      
      </> */}
    </>


  );
};

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../Screens/home";
import Search from "../Screens/search";
import Profile from "../Screens/profile";
import React from "react";
import Routine from "../Screens/routine";
import CameraPage from "../Screens/camera";
import { View } from "react-native";
const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () =>{
    return(
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#8518FF', // Color when tab is active
                tabBarInactiveTintColor: 'gray', // Color when tab is inactive
                tabBarHideOnKeyboard: true,
                tabBarShowLabel:false
                
            }}
        >
            <BottomTab.Screen
                name = "Home"
                component = {Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <Icon name="home" size={30} color={color}/>
                        )
                    }
                }}
            />
             <BottomTab.Screen
                name = "CameraPage"
                component = {CameraPage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <Icon name="camera" size={30} color={color}/>
                        )
                    }
                }}
            />
            <BottomTab.Screen 
                name="Search"
                component={Search}   
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <View style={{padding:10,bottom:25,backgroundColor:"#9D70F1",borderRadius:30}}>
                                <Icon name="search" size={25} color={"white"}/>
                            </View>
                            
                        )
                    }
                }}
            /> 

           <BottomTab.Screen
                name = "Routine"
                component = {Routine}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <Icon name="list" size={30} color={color}/>
                        )
                    }
                }}
            />
            
            <BottomTab.Screen
                name = "Profile"
                component = {Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <Icon name="user" size={30} color={color}/>
                        )
                    }
                }}
            />

        </BottomTab.Navigator>
    )
}

export default BottomTabNavigation;
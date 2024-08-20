import React from "react"
import { View,Text} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthNavigation from "./Authentication"
import { useDispatch, useSelector } from "react-redux";
import UserNavigation from "./UserNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
const Navigation =()=>{
    const dispatch = useDispatch();
    const auth = useSelector((state:{isAuth: boolean;}) => state.isAuth);
    return(
        <GestureHandlerRootView>
             <NavigationContainer >
               <SafeAreaView style={{flex:1}}>
                <>
                {auth ? <UserNavigation/> : <AuthNavigation/>}
                </> 
                </SafeAreaView>
             </NavigationContainer> 
       </GestureHandlerRootView>
        
    )
}
export default Navigation;
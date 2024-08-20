import { Stack } from "expo-router";
import { StyleSheet, View ,Text} from "react-native";
import Header from "../components/Header";
import MessageCard from "../components/Message";
import React from "react";
const Noification=()=>{
    return(
        <>
        
        <View style={styles.container}>
        <Header title={"Notification"} />
            <MessageCard/>
        </View>
        </>
        
    )
}
export default Noification;
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'white',
        padding:20,
        paddingTop:90
    }
})
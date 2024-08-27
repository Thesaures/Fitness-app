import { Stack } from "expo-router";
import { StyleSheet, View ,Text, FlatList} from "react-native";
import Header from "../components/Header";
import MessageCard from "../components/Message";
import React from "react";
import Pancake from '../../assets/images/pancakes.svg'
const arrayNoti =[
    {
        header:'hello one',
        time:'haii one',
        svg:Pancake
    },
    {
        header:'hello two',
        time:'haii two',
        svg:Pancake
    }

]
const Noification=()=>{
    return(
        <>
        
        <View style={styles.container}>
        <Header title={"Notification"} />
            <View>
            <FlatList
                    data={arrayNoti}
                    renderItem={({item}) => 
                    <MessageCard header={item.header} time={item.time} Svg={undefined}/>
                }
                />
            </View>
                

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
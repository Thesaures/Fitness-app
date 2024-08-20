import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import Five from '../../assets/images/imageFive.svg'
import React from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";

const Intro =()=>{
    const { width, height } = Dimensions.get('window');
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const navigater =()=>{
        navigation.navigate('Slider');
    }
    return(
        <View style={styles.container}>
            <View style={styles.upper}>
              <Five width={width*0.9} height={height * 0.56}/>
            </View>
            <View style={styles.lower}>
            <Text style={styles.head}> Let's complete your profile</Text>
            <Text>it will help us to know more about you</Text>
            <View style = {styles.name}>
                <Ionicons name="people-outline" size={18}/>
                <TextInput style = {styles.textIput} placeholder="Choose Gender" placeholderTextColor={'grey'}></TextInput>
             </View>
             <View style = {styles.name}>
                <Ionicons name="calendar-outline" size={18}/>
                <TextInput style = {styles.textIput} placeholder="Date Of Birth" placeholderTextColor={'grey'}></TextInput>
             </View>
             <View style={styles.bottom}>
                    <View style = {styles.name}>
                        <Ionicons name="barbell-outline" size={18}/>
                        <TextInput style = {styles.textIput} placeholder="Weight" placeholderTextColor={'grey'}></TextInput>
                    </View>
                    <LinearGradient
                        colors={['#EEA4CE','#C150F6']}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 1, y: 0 }}  
                        style={styles.viewBottom}
                        >
                        <Text style={styles.bottomText}>KG</Text>
                    </LinearGradient>
                   
             </View>
             <View style={styles.bottom}>
                    <View style = {styles.name}>
                        <Ionicons name="arrow-up-outline" size={18}/>
                        <TextInput style = {styles.textIput} placeholder="Height" placeholderTextColor={'grey'}></TextInput>
                    </View>
                    <LinearGradient
                        colors={['#EEA4CE','#C150F6']}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 1, y: 0 }}  
                        style={styles.viewBottom}
                        >
                        <Text style={styles.bottomText}>CM</Text>
                    </LinearGradient>
                   
             </View>
            <TouchableOpacity style = {styles.button} onPress={navigater}>
                <Text style = {styles.buttonText}>Next</Text>
                <Ionicons name="chevron-forward" size={20} color={'white'}/>
            </TouchableOpacity>
            
             
            </View>
        </View>
    )
}
export default Intro;
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    upper:{
        alignItems:'center',
        justifyContent:'center',
        flex:0.4
    },
    lower:{
        flex:0.6,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:20,
        marginTop:60
    },
    head:{
       fontSize:25,
       fontWeight:'800'
    },
    name:{
        flexDirection:'row',
        flex:1,
        backgroundColor:Colors.inputbg,
        borderRadius:10,
        padding:15,
        alignItems:'center',
        marginTop:10,
        marginBottom:5
    },
    textIput:{
        flex:1,
        marginLeft:10
    },
    button:{
        backgroundColor:Colors.button,
        padding:25,
        paddingHorizontal:135,
        borderRadius:40,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:20
    },
    bottom:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5
    },
    viewBottom:{
         marginLeft:10,
         padding:15,
         borderRadius:10
    },
    bottomText:{
        color:'white'
    }
    
})
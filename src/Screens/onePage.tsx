import { View,Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import Picture from '../../assets/images/imageone.svg'
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from "react-native-svg";
import { Link } from "expo-router";
import React from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";
const OnePage=()=>{
    const { width, height } = Dimensions.get('window');
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const navigator = () => {
      navigation.navigate('TwoPage');
    };
    return(
        <View style={styles.container}>
            <View style={styles.upper}>
            <Picture width={width * 1.1} height={height * 0.53} />
            </View>
            <View style={styles.lower}>
                {/* <View style={{flex:.3,backgroundColor:'red'}}></View> */} 
                <View style={styles.section}>
                <Text style={styles.header}>Track Your Goals</Text>
                <Text style={styles.paragraph}>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</Text>
                </View>
                <View style={{alignItems:'flex-end',marginBottom:30}}>
               
                <TouchableOpacity onPress={navigator}>
                <AnimatedCircularProgress
                    size={80}
                    width={2}
                    rotation={0}
                    fill={25}
                    tintColor="#8762F3"
                    backgroundColor="#FFFFFF"
                   children={()=>{
                    return(
                         <View style={styles.inner}>
                            <Ionicons name="chevron-forward-outline" size={20} color={'white'}/>
                        </View>    
                    )
                   }
                }
                    />
                </TouchableOpacity>
               
            
                
                </View>               
            </View>
        </View>
    )
}
export default OnePage;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg

    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lower:{
        flex:1,
        marginHorizontal:30,
        justifyContent:'space-between'
    },
    header:{
        fontSize:30,
        fontWeight:'600'
    },
    paragraph:{
        fontSize:15,
        marginTop:10
    },
    section:{
        marginTop:50
    },
    inner:{
        backgroundColor:'#8762F3',
        padding:23,
        borderRadius:50,
        borderColor:'#FFFFFF',
        borderWidth:6
    },
})
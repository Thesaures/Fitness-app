import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { View,Text, StyleSheet, TouchableOpacity, Button, Image,KeyboardAvoidingView } from "react-native"
import { GestureHandlerRootView, ScrollView, TextInput } from "react-native-gesture-handler";
import Facebook from "../../assets/images/Facebook.svg";
import Google from '../../assets/images/google.svg'
import { useState } from "react";
import { fieldCheck } from "../helper";
import { authAction } from "../Store/Index";
import { useDispatch,useSelector} from "react-redux";
import React from "react";
const HomePage = ()=>{
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [fields,setField] = useState('');
    const [message,setMessage] = useState('');
    const [eye,setEye] = useState(true);
    const [checkBox,setCheckBox] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state:{isAuth: boolean;}) => state.isAuth);
    const clickFunction =()=>{
        console.log('logged in :',auth)
        dispatch(authAction.login())
    }
    const onCheck =()=>{
        setCheckBox(!checkBox)
    }
    const changeEye = ()=>{
        setEye(!eye)
    }
    const navigateToPage =()=>{
        const {message,field} = fieldCheck({name,number,email,password,checkBox})
        console.log('this is message: ',message,',this is field :',field)
        setField(field); 
        setMessage(message);

        if(!message && !field && checkBox){
            dispatch(authAction.login())
        }
    }
    return(
        
        <GestureHandlerRootView style={{flex:1}}>
            <ScrollView>
            <View style = {styles.container}>
             <Text style={styles.firstLine}>Hey there, </Text>
             <Text style={styles.secondLine}>Create an Account</Text>


             <View style = {[styles.name,{borderColor:fields == 'name' || fields == 'all' ?"red":'transparent',borderWidth:3}]}>
                <Ionicons name="person-outline" size={18}/>
                <TextInput 
                style = {styles.textIput} 
                placeholder="Full Name" 
                placeholderTextColor={'grey'} 
                onChangeText={setName}
                value={name}
                />  
             </View>
             {fields == 'name' && <>
                    <Text style={{color:'red',fontWeight:'500',padding:0,fontSize:10}}>{message}</Text>
                </>}
             <View style = {[styles.name,{borderColor:fields == 'number' || fields == 'all' ?"red":'transparent',borderWidth:3}]}>
                <Ionicons name="call-outline" size={18}/>
                <TextInput 
                style = {styles.textIput}
                 placeholder="Phone number" 
                 placeholderTextColor={'grey'}
                 onChangeText={setNumber}
                 value={number}
                 />
                 
             </View>
             {fields == 'number' && <>
                    <Text style={{color:'red',fontWeight:'500',padding:0,fontSize:10}}>{message}</Text>
                </>}
             <View style = {[styles.name,{borderColor:fields == 'email' || fields == 'all' ?"red":'transparent',borderWidth:3}]}>
                <Ionicons name="mail-outline" size={18}/>
                <TextInput 
                style = {styles.textIput} 
                placeholder="Email" 
                placeholderTextColor={'grey'}
                onChangeText={setEmail}
                value={email}/>
             </View>
             {fields == 'email' && <>
                    <Text style={{color:'red',fontWeight:'500',padding:0,fontSize:10}}>{message}</Text>
                </>}
             <View style = {[styles.name,{borderColor:fields == 'password' || fields == 'all' ?"red":'transparent',borderWidth:3}]}>
                <Ionicons name="lock-closed-outline" size={18}/>
                <TextInput 
                style = {styles.textIput} 
                placeholder="Password" 
                placeholderTextColor={'grey'}
                onChangeText={setPassword}
                textContentType='password'
                secureTextEntry={eye}
                value={password}
                
                />
                <TouchableOpacity onPress={changeEye}>
                {!eye ? 
                    <Ionicons name="eye-outline" size={18}/>:
                    <Ionicons name="eye-off-outline" size={18}/>}
                </TouchableOpacity>   
             </View>
             {fields == 'password' && <>
                    <Text style={{color:'red',fontWeight:'500',padding:0,fontSize:10}}>{message}</Text>
                </>}

             <View style = {styles.checkLine}>
                <TouchableOpacity onPress={onCheck}>
                <View style = {[styles.check,{backgroundColor:checkBox?'green':'transparent'}]} ></View>
                </TouchableOpacity>
                <Text 
                style={[styles.checkText,{fontWeight:fields == 'check'?'900':'200'}]}>By continuing you accept our Privacy Policy and Terms of Use</Text>
             </View>
             {fields == 'check' || fields =='all' && <>
                    <Text style={{color:'red',fontWeight:'500',padding:0,fontSize:10}}>{message}</Text>
                </>}


             <TouchableOpacity style = {styles.button} onPress={navigateToPage}>
                <Text style = {styles.buttonText}>Register</Text>
            </TouchableOpacity>
             
             
             <View style={styles.textUnder}>
                <View  style={styles.line}></View>
                <View style={styles.or}> 
                    <Text style={styles.o}>O</Text><Text style={styles.r}>r</Text>
                </View>
               
                <View  style={styles.line}></View>
             </View>
             <View style={styles.media}>
                <View style={styles.singleMedia}><Google width={25} height={30}/></View>
                <View style={styles.singleMedia}><Facebook width={25} height={30}/></View>
             </View>
             <View style={styles.login}>
                <Text> Already have an account?</Text>
                <Link href={"/login"}>
                <Text style={styles.loginText}>Login</Text>
                </Link>
                
               
             </View>
        </View>
            </ScrollView>
           
           
            
        </GestureHandlerRootView>
        
    )
}
export default HomePage;
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.bg,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:30,
        marginTop:20,
        // flex:1,
        // height:"100%"
    },
    firstLine:{
        fontSize:20
    },
    secondLine:{
        fontSize:23,
        fontWeight:'600',
        marginBottom:20
    },
    name:{
        flexDirection:'row',
        backgroundColor:Colors.inputbg,
        borderRadius:10,
        padding:15,
        alignItems:'center',
        marginTop:10,
        marginBottom:12
    },
    textIput:{
        flex:1,
        marginLeft:10
    },
    check:{
        height:13,
        width:13,
        borderWidth:1
    },
    checkLine:{
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        backgroundColor:Colors.button,
        padding:25,
        paddingHorizontal:135,
        borderRadius:40,
        marginTop:90
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:20
        },
    textUnder:{
       flexDirection:'row',
       alignItems:'center',
       marginVertical:14
    },
    line:{
        flex:1,
        borderWidth:.5,
        height:0
    },
    or:{
        flexDirection:'row',
       alignItems:'center',
        marginHorizontal:10
    },
    o:{
        fontSize:20
    },
    r:{
        fontSize:18
    },
    media:{
        flexDirection:'row',
        marginVertical:8
    },
    singleMedia:{
        borderWidth:.4,
        marginHorizontal:20,
        padding:10,
        borderRadius:10
    },
    login:{
       flexDirection:'row',
       marginVertical:8
    },
    loginText:{
        color:'#C456F3'
    },
    checkText:{
        marginLeft:10,
        flex:1,
        color:'grey',
        marginTop:20
    }
})
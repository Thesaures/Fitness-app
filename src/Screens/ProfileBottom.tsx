import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Detail from "../components/Detail";
const ProfileBottom =()=>{
    return(
        <View style={styles.container}>
            <Header title={"Profile"}/>
            <View style={styles.intro}>
                 <View style={styles.image}></View>
                 <View >
                    <Text style={styles.name}>Aidrin Varghese</Text>
                 </View>
                 <TouchableOpacity style={styles.edit}>
                    <Text style={styles.text}>Edit</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.detail}>
              <Detail value={180} label={'Height'} measure={"cm"}/>
              <Detail value={65} label={"weight"} measure={"kg"}/>
              <Detail value={22} label={"age"} measure={"yo"}/>
            </View>
        </View>
    )
}
export default ProfileBottom;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        paddingHorizontal:20
    },
    intro:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        elevation:9,
        backgroundColor:'white',
        padding:10,
        borderRadius:15
    },
    image:{
        width:60,
        height:60,
        backgroundColor:'red',
        borderRadius:50
    },
    name:{
        fontSize:20,
        fontWeight:'500'
    },
    edit:{
       backgroundColor:'#8862F3',
       padding:6,
       borderRadius:15,
       paddingHorizontal:18
    },
    text:{
        color:'white'
    },
    detail:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
    }
})
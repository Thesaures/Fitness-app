import { Ionicons } from "@expo/vector-icons";
import { View,Text, StyleSheet } from "react-native"
import Pancake from '../../assets/images/pancakes.svg'
const MessageCard = ()=>{
    return(
        <View style={styles.container}>
            <View style={{flex:1,flexDirection:'row'}}>
            <View style={styles.pic}>
            <Pancake height={30} width={44}/>
            </View>
            <View style={{marginLeft:10}}>
                <Text style={styles.textOne}>Hey,it's time for lunch</Text>
                <Text  style={styles.textTwo}>About 1 minute ago</Text>
            </View>
            </View>
            <Ionicons name="ellipsis-vertical-outline" size={20}/>
        </View>
    )
}
export default MessageCard;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    pic:{
       backgroundColor:'#A3FBE2',
       padding:6,
       borderRadius:50
    },
    textOne:{
        fontSize:17,
        fontWeight:'500'
     },
     textTwo:{
        fontSize:15,
        fontWeight:'300'
     }
})
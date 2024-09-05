import { View,Text,StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { singleSet } from "../types/types";
const SingleSetCard =(props:singleSet)=>{
    const {Svg,name,set} = props;
    return(
        <View style={Styles.container}>
            <View style={Styles.subContainer}>
                <Svg height={80} width={80}/>
                <View style={Styles.centre}>
                <Text style={Styles.text}>{name}</Text>
                <Text style={Styles.text}>{set}</Text>
                </View>
            </View>
           <Ionicons name="chevron-forward-circle-outline" size={28}/>
        </View>
    )
}

export default SingleSetCard;

const Styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:10,
      alignItems:'center'
    },
    subContainer:{
        flexDirection:'row'
    },
    centre:{
        marginLeft:20
    },
    text:{
        fontSize:15
    }
 })
import { View,Text,StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Colors } from "../constants/Colors";

const screenWidth = Dimensions.get("window").width;
const TodayTarget=()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Today Target</Text>
            <TouchableOpacity style={styles.button}>
                <Text>Check</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TodayTarget;
const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#F6E8FD',
        borderRadius:10,
        padding:10,
        marginVertical:10,
        flexDirection:'row',
        width:screenWidth*0.8
    },
    button:{
        backgroundColor:'#8C66F3',
        padding:4,
        borderRadius:18,
        paddingHorizontal:12
    },
    label:{
       fontWeight:'600',
       fontSize:16
    }
})
import { View,Text, StyleSheet } from "react-native"
import WaterMeasure from "./WaterMeasure";
import { waterMeasure } from "../types/types";
const array:waterMeasure[] = [
    {
        start:'6am',
        end:'8am',
        measure:'600ml'
    },
    {
        start:'8am',
        end:'10am',
        measure:'600ml'
    }
]
const WaterIntake=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.in}></View>
            </View>
            <View>
                <Text style={styles.head}>Water Intake</Text>
                <Text style={styles.measure}>4 Liters</Text>
                <Text>Real Time Updates</Text>
                {array.map((item)=>(
                    <WaterMeasure start={item.start} end={item.end} measure={item.measure}/>
                    ))}
            
            </View>
        </View>
    )
}
export default WaterIntake;
const styles =StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F6E8FD',
        flexDirection:'row',
        padding:20,
        margin:10,
        borderRadius:10,
    },
    left:{
        height:200,
        width:30,
        backgroundColor:'red',
        position:'relative',
        borderRadius:20,
        marginRight:20
    },
    in:{
        height:70,
        width:30,
        backgroundColor:'blue',
        position:'absolute',
        bottom:0,
        borderRadius:20
    },
    head:{
        fontSize:18,
        fontWeight:'500'
    },
    measure:{
         fontSize:15,
         fontWeight:'500',
         marginVertical:5
    }
})
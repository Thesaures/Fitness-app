import { View,Text, StyleSheet } from "react-native"
import HomePageHeader from "../components/HomePageHeader";
import Bmi from "../components/Bmi_Componet";
import { Colors } from "../constants/Colors";
import HeartRate from "../components/HeartRate";
import TodayTarget from "../components/TodayTarget";
const HomeBottom =()=>{
    return (
        <View style={styles.container}>
            <HomePageHeader/>
            <Bmi/>
            <TodayTarget/>
            <HeartRate/>
        </View>
    )
}
export default HomeBottom;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:Colors.pagebg
    }
})
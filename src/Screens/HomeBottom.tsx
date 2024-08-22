import { View,Text, StyleSheet } from "react-native"
import HomePageHeader from "../components/HomePageHeader";
import Bmi from "../components/Bmi_Componet";
import { Colors } from "../constants/Colors";
import HeartRate from "../components/HeartRate";
const HomeBottom =()=>{
    return (
        <View style={styles.container}>
            <HomePageHeader/>
            <Bmi/>
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
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { View,Text, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
interface head {
    title:string;
}
const HomePageHeader= ()=>{
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const navigator = () => {
      navigation.navigate('Noification');
    };
    return(
        <>
        <View style={styles.container}>
            <View>
            <Text >Welcome Back,</Text>
            <Text style={styles.name}>Aidrin Varghese</Text>
            </View>
            
           
            <TouchableOpacity onPress={navigator}>
                    <View style={styles.icon}>
                        <Ionicons name="notifications-outline" size={25}/>
                    </View>
            </TouchableOpacity>
           
       
        </View>
        </>
    )
}
export default HomePageHeader;
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        position:'absolute',
        top:0,
        width:'100%',
        // borderRadius:20,
        flexDirection:'row',
        padding:15
    },
    name:{
        fontWeight:'700',
        fontSize:20,
    },
    icon:{
        backgroundColor:'#F7F8F8',
        padding:8,
        borderRadius:10
    }
})
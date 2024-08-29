import { View,Text, StyleSheet } from "react-native"
interface head {
    title:string;
}
const Header= ( props:head)=>{
    const {title} = props;
    return(
        <>
        <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        </View>
        </>
    )
}
export default Header;
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        position:'absolute',
        top:0,
        width:'100%',
    },
    text:{
        fontWeight:'700',
        fontSize:20,
        marginTop:15,
        marginBottom:10
    }
})
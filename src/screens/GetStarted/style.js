import {
    Dimensions,
    Platform,
    StyleSheet,
  } from 'react-native';
  import { color, font, size } from "../global";
export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
    },
    wrapper:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    primary_text:{
        fontFamily: font.semibold,
        fontSize:size.heading,
        color:"black"
    },
    secondary_text:{
        fontFamily: font.regular,
        fontSize:size.primary,
        color:"black",
        marginTop:15
    },
    start_button:{
        backgroundColor:color.orange,
        borderRadius:30,
        height:"25%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        gap:15,
        marginBottom:10
    },
    start_text:{
        color:"white",
        fontFamily:font.semibold,
        fontSize:size.primary
    },
    button_start_div:{
        width:"60%",
        justifyContent:"flex-end"
    }
});
import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('screen')
export const beginStyles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      width:width,
      height:height,
      paddingHorizontal:50
    },
    tinyLogo: {
      flex:0.5,
      borderWidth: 1,
      borderColor: "#d1d1d1",
      backgroundColor: "#62D2A2"
    },
    bodyText: {
      alignItems: "center",
      justifyContent: "center",
      flex:0.25
    },
    headerText: {
      fontSize: 20,
      fontWeight: 700,
      textAlign: "center"
    },
    contentText: {

      marginTop:15,
      fontSize: 14,
      fontWeight: 400,
      textAlign: "center"
  
    },
    generalButton: {
      flex:1,

        backgroundColor: "#62D2A2",
        fontSize:30,
        fontColor:'#fffff'
    }
  });
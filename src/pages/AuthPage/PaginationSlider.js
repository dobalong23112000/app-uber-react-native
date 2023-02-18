import React from 'react'
import { Animated, View } from 'react-native'
import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get("screen");
export const PaginationSlider = ({datas,scrollX}) => {
  return (
    <View style={styles.container}>
        {datas.map((data,index)=>{
            const inputRange=[(index-1)*width,index*width,(index+1)*width]
            const dotWidth=scrollX.interpolate({
                inputRange,
                outputRange:[12,30,12],
                extrapolate:'clamp'
            })
           return <Animated.View key={data.id} style={[styles.dot,{width:dotWidth}]}/>
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:40   ,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },

    dot:{
        width:15,
        height:15,
        borderRadius:6,
        backgroundColor:"#ccc",
        marginHorizontal:3
    }
  });
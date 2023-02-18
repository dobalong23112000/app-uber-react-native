import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { beginStyles } from '../../assests/styles/BeginScreen'

export const SliderItem = ({ item }) => {
    return (
        <View style={beginStyles.container}>
            <Image
                style={beginStyles.tinyLogo}
                source={item.img}
            />
            <View style={beginStyles.bodyText}>
                <Text style={beginStyles.headerText}>{item.headerText}</Text>
                <Text style={beginStyles.contentText}>{item.contentText}</Text>
            </View>
            <View style={{ borderRadius: 40, flex: 0.4 }}>
                <Button title='Get Started' style={[beginStyles.generalButton]} onPress={() => {
                    navigation.navigate("Login")
                }} />
            </View>
        </View>
    )
}

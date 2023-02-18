import React, { useRef } from 'react'
import { View, FlatList, ScrollView, Animated } from 'react-native'
// import { } from 'react-native-gesture-handler'
import itemBeginPage from '../../ultis/itemBeginPage'
import { PaginationSlider } from './PaginationSlider.js'
import { SliderItem } from './SliderItem.js'

export const Slider = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = (event) => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    },

                }
            }
        ],
            {
                useNativeDriver: false
            })(event);
    }
    return (
        <View >
            <FlatList horizontal={true}
                data={itemBeginPage}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                bounces={false}
                renderItem={(item) => <SliderItem item={item.item}
                    keyExtractor={(item, index) => item.item.id}
                />}
                onScroll={handleOnScroll} />
            <PaginationSlider datas={itemBeginPage} scrollX={scrollX}/>
        </View>
    )
}

import { StatusBar } from 'expo-status-bar';
import React, { useCallback, memo, useRef, useState } from "react";
import { StyleSheet, Text, View,FlatList,Dimensions, ActivityIndicator } from 'react-native';
import CarouselCardImage from './src/Components/ImageCarouselCard';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function App() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;
    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };
    
  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);


  return (
    <View style={styles.container}>
      <FlatList 
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
    </View>
  );
}



const slideList = Array.from({length: 30}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `Titulo Numero ${i + 1}!`
  }
})


const Slide = memo(function Slide({data}){
  return (
    <View style={styles.slide}>
      <CarouselCardImage 
      text={data.title}
      source={{
        uri: data.image
      }}
      />
    </View>
  )
});

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  
});

import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import StyledCard from './styled-card';

import defaultApp from '../../../assets/img/app.png';

const mock = [
  { title: '名称1', code: '1', image: defaultApp },
  { title: '名称2', code: '2', image: defaultApp },
  { title: '名称3', code: '3', image: defaultApp },
  { title: '名称4', code: '4', image: defaultApp },
  { title: '名称5', code: '5', image: defaultApp },
  { title: '名称6', code: '6', image: defaultApp },
  { title: '名称7', code: '7', image: defaultApp },
  { title: '名称8', code: '8', image: defaultApp },
  { title: '名称9', code: '9', image: defaultApp },
  { title: '名称10', code: '10', image: defaultApp },
];

const ITEM_GAP = 12;
const VISIBLE_COUNT = 4;
const TRACK_WIDTH = 25;
const THUMB_WIDTH = 15;

export default function RecentlyUsed() {
  const [data, setData] = useState(mock);
  const [availableWidth, setAvailableWidth] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(1);

  const translateX = scrollX.interpolate({
    inputRange: [0, Math.max(1, contentWidth - containerWidth)],
    outputRange: [0, Math.max(0, TRACK_WIDTH - THUMB_WIDTH)],
    extrapolate: 'clamp',
  });

  const itemWidth =
    availableWidth > 0
      ? (availableWidth - ITEM_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT
      : 0;

  const renderItem = ({ item }: { item: (typeof mock)[0] }) => (
    <View style={[styles.itemCard, { width: itemWidth }]}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <StyledCard title="最近使用">
      <View
        onLayout={e => {
          const width = e.nativeEvent.layout.width;
          setAvailableWidth(width);
        }}
      >
        <Animated.FlatList
          horizontal={true}
          data={data}
          keyExtractor={item => item.code}
          showsHorizontalScrollIndicator={false}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          onContentSizeChange={w => setContentWidth(w)}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={16}
          ItemSeparatorComponent={() => <View style={{ width: ITEM_GAP }} />}
          renderItem={renderItem}
        />
        {/* 极简位置提示器 */}
        {contentWidth > containerWidth && (
          <View style={styles.track}>
            <Animated.View
              style={[styles.thumb, { transform: [{ translateX }] }]}
            />
          </View>
        )}
      </View>
    </StyledCard>
  );
}

const styles = StyleSheet.create({
  itemCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 56,
    height: 56,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#C4C4C4',
  },
  itemText: {
    textAlign: 'center',
    lineHeight: 20,
    color: '#282731',
  },
  track: {
    width: 25,
    height: 4,
    alignSelf: 'center',
    backgroundColor: '#E4E4E7',
    borderRadius: 2,
    marginTop: 8,
    overflow: 'hidden',
  },
  thumb: {
    width: THUMB_WIDTH,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#88878E',
  },
});

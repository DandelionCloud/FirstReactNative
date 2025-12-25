import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import StyledCard from './styled-card';

import defaultApp from '../../../assets/img/app.png';
import React from 'react';
import { useState } from 'react';

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

export default function RecentlyUsed() {
  const [data, setData] = useState(mock);

  const [availableWidth, setAvailableWidth] = useState(0);

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
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={item => item.code}
          showsHorizontalScrollIndicator={true}
          ItemSeparatorComponent={() => <View style={{ width: ITEM_GAP }} />}
          renderItem={renderItem}
        />
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
});

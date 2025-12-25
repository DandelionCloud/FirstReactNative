import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import StyledCard from './styled-card';
import { Image } from '@rneui/base';

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
  { title: '名称11', code: '11', image: defaultApp },
  { title: '名称12', code: '12', image: defaultApp },
  { title: '名称13', code: '13', image: defaultApp },
  { title: '名称14', code: '14', image: defaultApp },
  { title: '名称15', code: '15', image: defaultApp },
  { title: '名称16', code: '16', image: defaultApp },
  { title: '名称17', code: '17', image: defaultApp },
  { title: '名称18', code: '18', image: defaultApp },
  { title: '名称19', code: '19', image: defaultApp },
  { title: '名称20', code: '20', image: defaultApp },
  { title: '名称21', code: '21', image: defaultApp },
  { title: '名称22', code: '22', image: defaultApp },
  { title: '名称23', code: '23', image: defaultApp },
  { title: '名称24', code: '24', image: defaultApp },
  { title: '名称25', code: '25', image: defaultApp },
  { title: '名称26', code: '26', image: defaultApp },
  { title: '名称27', code: '27', image: defaultApp },
  { title: '名称28', code: '28', image: defaultApp },
  { title: '名称29', code: '29', image: defaultApp },
  { title: '名称30', code: '30', image: defaultApp },
];
const ITEM_GAP = 12;
const VISIBLE_COUNT = 4;

export default function ResourceGroup() {
  const [list, setList] = useState(mock);
  const [availableWidth, setAvailableWidth] = useState(0);

  const itemWidth =
    availableWidth > 0
      ? (availableWidth - ITEM_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT
      : 0;
  console.log('🌈 itemWidth', itemWidth);

  const renderItem = ({ item }: { item: (typeof mock)[0][] }) => (
    <View style={styles.groupList}>
      {item.map(item => (
        <View style={[styles.item, { width: itemWidth }]} key={item.code}>
          <Image source={item.image} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      ))}
    </View>
  );

  function splitByFour(arr: (typeof mock)[0][]) {
    const result = [];
    for (let i = 0; i < arr.length; i += 4) {
      result.push(arr.slice(i, i + 4));
    }
    return result;
  }

  return (
    <StyledCard title="资源组">
      <View
        style={styles.groupList}
        onLayout={e => {
          const width = e.nativeEvent.layout.width;
          console.log('🦀 width', width);
          setAvailableWidth(width);
        }}
      >
        {/* {list.map(item => (
          <View style={[styles.item, { width: itemWidth }]} key={item.code}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        ))} */}

        <FlatList
          data={splitByFour(list)}
          keyExtractor={item => item[0].code}
          scrollEnabled={false}
          removeClippedSubviews={false}
          showsHorizontalScrollIndicator={true}
          ItemSeparatorComponent={() => <View style={{ height: ITEM_GAP }} />}
          renderItem={renderItem}
        />
      </View>
    </StyledCard>
  );
}
const styles = StyleSheet.create({
  groupList: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: ITEM_GAP,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  itemImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#4589FF',
  },
  itemTitle: {
    fontSize: 14,
    lineHeight: 16,
    color: '#282731',
  },
});

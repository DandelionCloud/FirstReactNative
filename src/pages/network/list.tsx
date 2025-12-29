import { ReactNode, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';

import { StackScreenProp } from '../../routes/define';
import NetworkItem from './components/networkItem';

import returnIcon from '../../assets/icon/return.png';

const mock = [
  { title: '上海安几科技有限公司', id: 'item1', time: '2023-01-01' },
  { title: '上海安几科技有限公司2', id: 'item2', time: '2023-01-01' },
  { title: '上海安几科技有限公司3', id: 'item3', time: '2023-01-01' },
  { title: '上海安几科技有限公司4', id: 'item4', time: '2023-01-01' },
  { title: '上海安几科技有限公司5', id: 'item5', time: '2023-01-01' },
  { title: '上海安几科技有限公司6', id: 'item6', time: '2023-01-01' },
  { title: '上海安几科技有限公司7', id: 'item7', time: '2023-01-01' },
  { title: '上海安几科技有限公司8', id: 'item8', time: '2023-01-01' },
  { title: '上海安几科技有限公司9', id: 'item9', time: '2023-01-01' },
  { title: '上海安几科技有限公司10', id: 'item10', time: '2023-01-01' },
];

export default function NetworkList(
  props: StackScreenProp<'NetworkList'>,
): ReactNode {
  const { navigation } = props;
  const [netList, _] = useState(mock);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={8}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
          marginBottom: 50,
        })}
        accessibilityRole="button"
        accessibilityLabel="Settings"
      >
        <Image source={returnIcon} style={{ width: 24, height: 24 }} />
      </Pressable>

      <View>
        <Text style={styles.title}>已加入的企业网络</Text>
        <Text style={styles.subTitle}>
          当前已连接{netList.length}个企业网络
        </Text>
      </View>

      <FlatList
        style={styles.scrollView}
        contentContainerStyle={{ gap: 5 }}
        data={netList}
        renderItem={({ item }) => <NetworkItem {...item} />}
        keyExtractor={item => item.id}
      />

      <Button
        title="添加企业网络"
        onPress={() => navigation.navigate('Network')}
        containerStyle={styles.joinBtnContainer}
        buttonStyle={styles.joinBtn}
        titleStyle={styles.joinBtnTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  returnIcon: {
    width: 24,
    height: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#282731',
    lineHeight: 24,
    fontWeight: 500,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 14,
    color: '#88878E',
    lineHeight: 18,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    marginVertical: 20,
  },
  joinBtnContainer: {
    width: '100%',
    height: 48,
  },
  joinBtn: {
    backgroundColor: '#0077f6',
    borderRadius: 8,
  },
  joinBtnTitle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 30,
  },
});

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Switch,
} from 'react-native';

import moreIcon from '../../assets/icon/more.png';
import { useState } from 'react';

export default function Resource() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlePressSetting = () => {
    console.log('打开设置页面');
  };

  return (
    <ScrollView style={styles.container}>
      {/* <ImageBackground source={appBg} style={styles.banner} resizeMode="cover"> */}
      <View
        style={{
          boxSizing: 'border-box',
          paddingTop: 56,
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.header}>
          <Pressable
            onPress={handlePressSetting}
            hitSlop={8}
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
              position: 'absolute',
              left: 0,
              top: 0,
            })}
            accessibilityRole="button"
            accessibilityLabel="Settings"
          >
            <Image source={moreIcon} style={{ width: 24, height: 24 }} />
          </Pressable>

          <Text style={styles.title}>应用资源</Text>
        </View>
        <View
          style={{ display: 'flex', flexDirection: 'row', marginBottom: 28 }}
        >
          <Text style={styles.subTitle}>已保护你的设备</Text>
          <Text style={styles.subTitleCount}>20</Text>
          <Text style={styles.subTitle}>天，全方位保障安全</Text>
        </View>

        <View style={{ display: 'flex', gap: 14 }}>
          <View style={styles.card}>
            <View style={[styles.cardHeader, { marginBottom: 10 }]}>
              <Text style={styles.cardTitle}>远程访问</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#4589FF' }}
                thumbColor="white"
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={styles.cardContent}></View>
            <View style={styles.cardFooter}>
              <View style={styles.cardFooterItem}>
                <Text>安全状态</Text>
                <Text
                  style={{
                    color: 'white',
                    lineHeight: 20,
                    fontWeight: 500,
                    backgroundColor: '#1890FF',
                    borderRadius: 4,
                    boxSizing: 'border-box',
                    paddingHorizontal: 8,
                  }}
                >
                  安全
                </Text>
              </View>
              <View style={styles.cardFooterItem}>
                <Text>网络传输</Text>
                <Text>50MB/s</Text>
              </View>
              <View style={styles.cardFooterItem}>
                <Text>运行时常</Text>
                <Text>30 分钟</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={[
                styles.cardHeader,
                { justifyContent: 'flex-start', gap: 6 },
              ]}
            >
              <Text>动态令牌</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text>最近使用</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text>未分组</Text>
            </View>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    // boxSizing: 'border-box',
    // paddingTop: 56,
    // paddingHorizontal: 20,
  },
  banner: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    // boxSizing: 'border-box',
    // paddingTop: 56,
    // paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 24,
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: 'white',
    lineHeight: 18,
    fontWeight: 400,
  },
  subTitleCount: {
    backgroundColor: '#59E868',
    boxSizing: 'border-box',
    height: 18,
    lineHeight: 18,
    borderRadius: 4,
    paddingHorizontal: 6,
    marginHorizontal: 4,
    color: 'white',
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 16,
    boxSizing: 'border-box',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    color: '#282731',
    lineHeight: 16,
    fontWeight: 500,
  },
  cardContent: {
    height: 43,
    backgroundColor:
      'linear-gradient(180.00deg, rgba(173, 183, 249, 1),rgba(177, 185, 248, 0) 100%)',
    opacity: 0.4,
    marginBottom: 14,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardFooterItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

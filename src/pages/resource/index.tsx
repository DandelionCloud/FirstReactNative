import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { DrawerParamList } from '../../routes/define';
import RemoteAccess from './components/remote-access';
import DynamicToken from './components/dynamic-token';
import ResourceGroup from './components/resource-group';
import RecentlyUsed from './components/recently-used';

import moreIcon from '../../assets/icon/more.png';
import appBg from '../../assets/img/app-bg.png';

export default function Resource() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const handlePressSetting = () => {
    navigation.openDrawer();
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={appBg}
        style={styles.banner}
        resizeMode="cover"
      />
      <View
        style={{
          boxSizing: 'border-box',
          paddingTop: 56,
          paddingHorizontal: 20,
          paddingBottom: 20,
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
          <RemoteAccess />
          <DynamicToken />
          <RecentlyUsed />
          <ResourceGroup />
        </View>
      </View>
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
    backgroundColor: '#f2f3f2',
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: 800,
    position: 'absolute',
    top: 0,
    left: 0,
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
});

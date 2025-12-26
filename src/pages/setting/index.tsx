import { Image, StyleSheet, View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Button } from '@rneui/themed';

import PressIcon from '../../components/presss-icon';
import ScaneImg from '../../assets/img/scan-line.png';
import ShieldIcon from '../../assets/icon/shield-check.png';
import PhoneIcon from '../../assets/icon/tablet-smartphone.png';
import SettingIcon from '../../assets/icon/settings.png';

export default function Setting() {
  const handleLogout = () => {
    console.log('logout');
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView style={styles.drawerContent}>
        <View style={styles.header}>
          <View style={styles.leftInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>ZHY</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.username}>ZHY306</Text>
              <Text style={styles.companyName}>Tencent</Text>
            </View>
          </View>
          <View style={styles.rightScane}>
            <PressIcon style={{ width: 20, height: 20 }}>
              <Image source={ScaneImg} />
            </PressIcon>
          </View>
        </View>
        <DrawerItem
          label="账号安全"
          style={styles.menuItem}
          labelStyle={styles.menuLabel}
          onPress={() => {
            console.log('账号安全');
          }}
          icon={() => <Image source={ShieldIcon} />}
        />
        <DrawerItem
          style={styles.menuItem}
          icon={() => <Image source={PhoneIcon} />}
          label={() => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.menuLabel}>登录设备</Text>
              <Text style={styles.deviceCount}>6台设备登录</Text>
            </View>
          )}
          onPress={() => {
            console.log('登录设备');
          }}
        />
        <DrawerItem
          label="通用设置"
          style={styles.menuItem}
          labelStyle={styles.menuLabel}
          icon={() => <Image source={SettingIcon} />}
          onPress={() => {
            console.log('登录设备');
          }}
        />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Button
          buttonStyle={styles.btnStyle}
          titleStyle={styles.btnTitleStyle}
          onPress={handleLogout}
        >
          退出登录
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    paddingVertical: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
  },
  drawerContent: {},
  header: {
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingLeft: 16,
    paddingRight: 4,
    marginBottom: 20,
  },
  leftInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  rightScane: {
    width: 34,
    height: 34,
    backgroundColor: '#fff',
    borderRadius: 17,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#4EC0F9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  avatarText: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
    fontWeight: 500,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  username: {
    fontSize: 16,
    color: '#282731',
    lineHeight: 20,
    fontWeight: 500,
  },
  companyName: {
    fontSize: 14,
    color: '#88878E',
    lineHeight: 16,
    fontWeight: 400,
  },
  menuItem: {},
  menuLabel: {
    fontSize: 16,
    color: '#282731',
    lineHeight: 20,
    fontWeight: 500,
  },
  deviceCount: {
    fontSize: 14,
    color: '#88878E',
    lineHeight: 16,
    fontWeight: 400,
  },
  footer: {
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: 20,
    paddingRight: 16,
  },
  btnContaienr: {},
  btnStyle: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 0,
  },
  btnTitleStyle: {
    fontSize: 16,
    color: '#DC2626',
    fontWeight: 400,
  },
});

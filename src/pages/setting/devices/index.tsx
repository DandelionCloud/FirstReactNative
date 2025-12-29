import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import PressableWithOpacity from '../../../components/presss-opacity';
import { DrawerScreenProp } from '../../../routes/define';
import StyledScreen from '../components/styled-screen';

import phoneIcon from '../../../assets/icon/phone-icon.png';
import laptopIcon from '../../../assets/icon/laptop-icon.png';
import browserIcon from '../../../assets/icon/browser-icon.png';

const mock = [
  {
    title: 'XY 的 iPhone',
    system: 'iOS 20.2.1',
    loginTime: '2023-08-10 10:00:00',
    isCurrent: true,
    type: 'phone',
  },
  {
    title: '笔记本',
    system: 'iOS 20.2.1',
    loginTime: '2023-08-10 10:00:00',
    isCurrent: false,
    type: 'laptop',
  },
  {
    title: '浏览器',
    system: 'iOS 20.2.1',
    loginTime: '2023-08-10 10:00:00',
    isCurrent: false,
    type: 'browser',
  },
];

export default function LoggedInDevices(
  props: DrawerScreenProp<'LoggedInDevices'>,
) {
  const { navigation } = props;
  const [devices, _] = useState([...mock]);

  const handleReturn = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  const handleLogout = () => {
    console.log('下线');
    // const parent = navigation.getParent();
    // parent.replace('Login');
  };

  const renderRightDelete = (
    prog: SharedValue<number>,
    drag: SharedValue<number>,
  ) => {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 56 }],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <PressableWithOpacity
          containerStyles={styles.rightAction}
          onPress={handleLogout}
        >
          <Text style={styles.actionText}>下线</Text>
        </PressableWithOpacity>
      </Reanimated.View>
    );
  };

  return (
    <StyledScreen title="设备管理" onReturn={handleReturn}>
      <View style={styles.container}>
        {devices.map(item => (
          <ReanimatedSwipeable
            key={item.title}
            containerStyle={{ borderRadius: 8, backgroundColor: '#fff' }}
            friction={2}
            enableTrackpadTwoFingerGesture
            rightThreshold={40}
            renderRightActions={renderRightDelete}
          >
            <View style={styles.item}>
              <View style={styles.left}>
                {item.type === 'phone' && (
                  <Image source={phoneIcon} style={{ width: 18, height: 18 }} />
                )}
                {item.type === 'laptop' && (
                  <Image
                    source={laptopIcon}
                    style={{ width: 18, height: 18 }}
                  />
                )}
                {item.type === 'browser' && (
                  <Image
                    source={browserIcon}
                    style={{ width: 18, height: 18 }}
                  />
                )}
                <View style={styles.info}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>系统：{item.system}</Text>
                  <Text style={styles.subtitle}>
                    登录时间：{item.loginTime}
                  </Text>
                </View>
              </View>
              {item.isCurrent && <Text style={styles.right}>本机</Text>}
            </View>
          </ReanimatedSwipeable>
        ))}
      </View>
    </StyledScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  item: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 6,
  },
  title: {
    fontSize: 14,
    color: '#282731',
    marginBottom: 2,
    lineHeight: 14,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 12,
    color: '#88878E',
  },
  right: {
    fontSize: 12,
    color: '#282731',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  rightAction: {
    width: 56,
    height: '100%',
    backgroundColor: '#DC2626',
  },
  actionText: {
    textAlign: 'center',
    lineHeight: 84,
    color: '#fff',
    fontSize: 12,
  },
});

import { ReactNode } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/themed';

import { StackScreenProp } from '../routes/define';
import loginLogo from '../assets/img/login-bg.png';

export default function LoginPage(props: StackScreenProp<'Login'>): ReactNode {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Text style={styles.title}>登录认证</Text>
        <Text style={styles.subTitle}>
          正在加入受保护的企业网络：[上海安几科技有限公司]
          为保障访问安全，请先进行身份验证
        </Text>
        <Image source={loginLogo} style={{ width: '100%', marginTop: 40 }} />
      </View>
      <View style={{ width: '100%' }}>
        <Button
          title="前往浏览器认证"
          onPress={() => navigation.navigate('SettingDrawer')}
          containerStyle={styles.joinBtnContainer}
          buttonStyle={[styles.joinBtn, { backgroundColor: '#0077f6' }]}
          titleStyle={styles.joinBtnTitle}
        />
        <Button
          title="切换企业网络"
          type="clear"
          onPress={() => navigation.navigate('NetworkList')}
          titleStyle={[styles.joinBtnTitle, { color: '#595860' }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    paddingTop: 92,
    paddingHorizontal: 20,
    paddingBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    marginBottom: 20,
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

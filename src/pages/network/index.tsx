import { ReactNode, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '@rneui/themed';

import { StackScreenProp } from '../../routes/define';
import PressableWithOpacity from '../../components/presss-opacity';

import arrowRightLeft from '../../assets/icon/arrow-right-left.png';

export default function Network(props: StackScreenProp<'Network'>): ReactNode {
  const { navigation } = props;
  const [text, setText] = useState('');

  const handleLogin = () => {
    if (!text) {
      Alert.alert('提示', '请输入专属邀请码', [{ text: '确认' }]);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>加入企业网络</Text>
        <Text style={styles.subTitle}>请联系企业管理员获取专属邀请码</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#88878E"
            onChangeText={setText}
            value={text}
            placeholder={'专属邀请码'}
          />
          {!text.includes('.') && (
            <Text style={styles.inputSuffix}>.angeek.com.cn</Text>
          )}
        </View>
        <PressableWithOpacity
          onPress={() => navigation.navigate('NetworkList')}
          containerStyles={styles.pressContainer}
          accessibilityLabel="Switch Network"
        >
          <Image style={styles.pressIcon} source={arrowRightLeft} />
          <Text style={styles.pressText}>切换网络</Text>
        </PressableWithOpacity>
      </View>

      <Button
        title="确认加入"
        onPress={handleLogin}
        containerStyle={styles.joinBtnContainer}
        buttonStyle={styles.joinBtn}
        titleStyle={styles.joinBtnTitle}
      />
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
  textInputContainer: {
    width: '100%',
    height: 48,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 0,
    fontSize: 14,
    color: '#88878E',
    lineHeight: 48,
  },
  input: {
    flex: 1,
    outlineWidth: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  inputSuffix: {
    fontSize: 14,
    color: '#88878E',
    lineHeight: 16,
  },
  pressContainer: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    gap: 4,
  },
  pressIcon: {
    width: 14,
    height: 14,
    color: '#1890FF',
  },
  pressText: {
    fontSize: 14,
    color: '#1890FF',
    lineHeight: 16,
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

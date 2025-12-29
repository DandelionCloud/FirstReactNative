import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import StyledScreen from '../components/styled-screen';
import checkedIcon from '../../../assets/icon/checked.png';
import PressableWithOpacity from '../../../components/presss-opacity';
import { DrawerScreenProp } from '../../../routes/define';

export enum Language {
  ZH_CN = 'zh-CN',
  EN_US = 'en-US',
}

export default function LanguageSetting(
  props: DrawerScreenProp<'LanguageSetting'>,
) {
  const { navigation } = props;
  const [lang, setLang] = useState(Language.ZH_CN);
  const handleReturn = () => {
    navigation.navigate('GeneralSetting');
  };

  const CheckedIcon = () => (
    <Image source={checkedIcon} style={{ width: 18, height: 18 }} />
  );

  return (
    <StyledScreen title="语言设置" onReturn={handleReturn}>
      <View style={styles.menus}>
        <PressableWithOpacity
          containerStyles={[styles.menuItem, styles.menuDivider]}
          onPress={() => setLang(Language.ZH_CN)}
        >
          <Text style={styles.menuLeftLabel}>简体中文</Text>
          {lang === Language.ZH_CN && <CheckedIcon />}
        </PressableWithOpacity>
        <PressableWithOpacity
          containerStyles={styles.menuItem}
          onPress={() => setLang(Language.EN_US)}
        >
          <Text style={styles.menuLeftLabel}>English</Text>
          {lang === Language.EN_US && <CheckedIcon />}
        </PressableWithOpacity>
      </View>
    </StyledScreen>
  );
}

const styles = StyleSheet.create({
  menus: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 15,
  },
  menuItem: {
    width: '100%',
    height: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuDivider: {
    boxSizing: 'content-box',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  menuLeftLabel: {
    fontSize: 14,
    color: '#282731',
    lineHeight: 18,
  },
});

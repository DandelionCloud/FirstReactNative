import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import StyledScreen from '../components/styled-screen';
import PressableWithOpacity from '../../../components/presss-opacity';
import checkedIcon from '../../../assets/icon/checked.png';
import { DrawerScreenProp } from '../../../routes/define';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  FOLLOW_SYSTEM = 'follow_system',
}

export default function AppearanceSetting(
  props: DrawerScreenProp<'AppearanceSetting'>,
) {
  const { navigation } = props;
  const [theme, setTheme] = useState(Theme.LIGHT);

  const handleReturn = () => {
    navigation.navigate('GeneralSetting');
  };

  const CheckedIcon = () => (
    <Image source={checkedIcon} style={{ width: 18, height: 18 }} />
  );

  return (
    <StyledScreen title="外观设置" onReturn={handleReturn}>
      <View style={styles.menus}>
        <PressableWithOpacity
          containerStyles={[styles.menuItem, styles.menuDivider]}
          onPress={() => setTheme(Theme.LIGHT)}
        >
          <Text style={styles.menuLeftLabel}>浅色</Text>
          {theme === Theme.LIGHT && <CheckedIcon />}
        </PressableWithOpacity>
        <PressableWithOpacity
          containerStyles={[styles.menuItem, styles.menuDivider]}
          onPress={() => setTheme(Theme.DARK)}
        >
          <Text style={styles.menuLeftLabel}>深色</Text>
          {theme === Theme.DARK && <CheckedIcon />}
        </PressableWithOpacity>
        <PressableWithOpacity
          containerStyles={styles.menuItem}
          onPress={() => setTheme(Theme.FOLLOW_SYSTEM)}
        >
          <Text style={styles.menuLeftLabel}>跟随系统</Text>
          {theme === Theme.FOLLOW_SYSTEM && <CheckedIcon />}
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
  menuLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  menuLeftLabel: {
    fontSize: 14,
    color: '#282731',
    lineHeight: 18,
  },
  menuRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 4,
  },
});

import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/themed';

import StyledScreen from '../components/styled-screen';
import PressableWithOpacity from '../../../components/presss-opacity';
import { DrawerScreenProp } from '../../../routes/define';

import langIcon from '../../../assets/icon/lang-icon.png';
import outfitIcon from '../../../assets/icon/outfit-icon.png';
import arrowIcon from '../../../assets/icon/arrow-icon.png';

export default function GeneralSetting(
  props: DrawerScreenProp<'GeneralSetting'>,
) {
  const { navigation } = props;

  const handleReturn = () => {
    navigation.goBack();
    navigation.openDrawer();
  };
  const handleCheck = () => {
    console.log('检查更新');
  };

  return (
    <StyledScreen title="通用设置" onReturn={handleReturn}>
      <View style={styles.container}>
        <View style={styles.menus}>
          <View style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Image source={langIcon} style={{ width: 18, height: 18 }} />
              <Text style={styles.menuLeftLabel}>多语言</Text>
            </View>
            <PressableWithOpacity
              containerStyles={styles.menuRight}
              onPress={() => {
                navigation.navigate('LanguageSetting');
              }}
            >
              <Text style={styles.menuRightLabel}>简体中文</Text>
              <Image source={arrowIcon} style={{ width: 18, height: 18 }} />
            </PressableWithOpacity>
          </View>
          <View style={styles.menuDivider} />
          <View style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Image source={outfitIcon} style={{ width: 18, height: 18 }} />
              <Text style={styles.menuLeftLabel}>外观设置</Text>
            </View>
            <PressableWithOpacity
              containerStyles={styles.menuRight}
              onPress={() => {
                navigation.navigate('AppearanceSetting');
              }}
            >
              <Text style={styles.menuRightLabel}>浅色</Text>
              <Image source={arrowIcon} style={{ width: 18, height: 18 }} />
            </PressableWithOpacity>
          </View>
        </View>
        <Button
          buttonStyle={styles.btnStyle}
          titleStyle={styles.btnTitleStyle}
          onPress={handleCheck}
        >
          检查更新
        </Button>
      </View>
    </StyledScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 30,
  },
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
    display: 'flex',
    flex: 1,
    height: 1,
    backgroundColor: '#F2F2F2',
    marginLeft: 41,
    marginRight: 15,
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
  menuRightLabel: {
    fontSize: 12,
    color: '#88878E',
    lineHeight: 18,
  },
  btnStyle: {
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  btnTitleStyle: {
    fontSize: 14,
    color: '#282731',
    fontWeight: 400,
  },
});

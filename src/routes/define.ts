import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

// stack 路由
export type RootStackParamList = {
  Home: undefined;
  Network: undefined;
  NetworkList: undefined;
  Login: undefined;
  SettingDrawer: undefined;
};

export type StackRouteName = keyof RootStackParamList;
export type StackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type StackScreenProp<T extends StackRouteName> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

// drawer 路由
export type DrawerParamList = {
  Resource: undefined;
  AccountSecurity: undefined;
  LoggedInDevices: undefined;
  GeneralSetting: undefined;
  AppearanceSetting: undefined;
  LanguageSetting: undefined;
};
export type DrawerRouteName = keyof DrawerParamList;
export type DrawerScreenProp<T extends DrawerRouteName> = DrawerScreenProps<
  DrawerParamList,
  T
>;

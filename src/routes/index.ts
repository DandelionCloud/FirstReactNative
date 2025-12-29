import { DrawerRouteName, StackRouteName } from './define';
import HomeScreen from '../pages/home';
import NetworkScreen from '../pages/network';
import NetworkListScreen from '../pages/network/list';
import LoginScreen from '../pages/login';

import AccountSecurity from '../pages/setting/account';
import GeneralSetting from '../pages/setting/general';
import LoggedInDevices from '../pages/setting/devices';
import AppearanceSetting from '../pages/setting/appearance';
import LanguageSetting from '../pages/setting/language';

type RouteItem = {
  name: StackRouteName | DrawerRouteName;
  component: React.ComponentType<any>;
  title: string;
};

// stack 路由
const routes: RouteItem[] = [
  {
    name: 'Home',
    component: HomeScreen,
    title: '首页',
  },
  {
    name: 'Network',
    component: NetworkScreen,
    title: '加入企业网络',
  },
  {
    name: 'NetworkList',
    component: NetworkListScreen,
    title: '已加入的企业网络',
  },
  {
    name: 'Login',
    component: LoginScreen,
    title: '登录',
  },
];
export default routes;

// drawer 路由
export const drawerRoutes: RouteItem[] = [
  {
    name: 'AccountSecurity',
    component: AccountSecurity,
    title: '账号安全',
  },
  {
    name: 'LoggedInDevices',
    component: LoggedInDevices,
    title: '登录设备',
  },
  {
    name: 'GeneralSetting',
    component: GeneralSetting,
    title: '通用设置',
  },
  {
    name: 'AppearanceSetting',
    component: AppearanceSetting,
    title: '外观设置',
  },
  {
    name: 'LanguageSetting',
    component: LanguageSetting,
    title: '多语言',
  },
];

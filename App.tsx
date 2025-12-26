/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import routes from './src/routes';
import SettingDrawer from './src/pages/setting';
import Resource from './src/pages/resource';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GestureHandlerRootView>
        <AppContent />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/*<NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />*/}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SettingDrawer">
          {routes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={{ headerShown: false }}
            />
          ))}
          <Stack.Screen
            name="SettingDrawer"
            component={DrawerView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

function DrawerView() {
  return (
    <Drawer.Navigator
      drawerContent={SettingDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#F3F7FA',
          width: '90%',
          padding: 0,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
        headerShown: false, // 将标题栏隐藏
      }}
    >
      <Drawer.Screen
        name="Resource"
        component={() => {
          return <Resource />;
        }}
      />
      <Drawer.Screen
        name="AppearanceSetting"
        component={() => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>外观设置</Text>
            </View>
          );
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

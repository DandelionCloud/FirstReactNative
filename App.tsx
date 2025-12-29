import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import stackRoutes, { drawerRoutes } from './src/routes';
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
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {stackRoutes.map(route => (
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
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Resource" component={Resource} />
      {drawerRoutes.map(route => (
        <Drawer.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{ title: route.title }}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default App;

import { ReactNode, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { StackScreenProp } from '../routes/define';

import launch from '../assets/img/launch.png';
import launchBg from '../assets/img/launch-bg.png';

export default function Home(props: StackScreenProp<'Home'>): ReactNode {
  const { navigation } = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Network');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={launchBg} style={styles.background}>
        <Image source={launch} style={styles.image} />
        <Text style={styles.text}>智能合规，守护安全</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  image: {
    height: '30%',
    top: '20%',
  },
  text: {
    fontSize: 28,
    color: '#1890FF',
    lineHeight: 28,
    position: 'absolute',
    top: '54%',
  },
});

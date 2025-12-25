import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import StyledCard from './styled-card';

import PressIcon from '../../../components/presss-icon';
import eyeIcon from '../../../assets/icon/eye.png';

export default function DynamicToken() {
  const [token, setToken] = useState('');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // TODO: 从后端获取动态令牌
    setTimeout(() => {
      setToken('214937');
    }, 1000);
  }, []);

  function groupBy3(value: string) {
    return value.match(/.{1,3}/g)?.join(' ') ?? value;
  }

  function maskToken(token: string) {
    return token.replace(/./g, '*');
  }

  return (
    <StyledCard
      title="动态令牌"
      titleIcon={<Text style={styles.tokenCount}>30</Text>}
    >
      <View style={styles.content}>
        <View>
          <Text style={[styles.token, { lineHeight: visible ? 30 : 40 }]}>
            {visible && token.length > 0
              ? groupBy3(token)
              : groupBy3(maskToken(token))}
          </Text>
        </View>
        <PressIcon
          accessibilityLabel="查看令牌"
          onPress={() => setVisible(!visible)}
        >
          <Image source={eyeIcon} style={styles.eyeIcon} />
        </PressIcon>
      </View>
    </StyledCard>
  );
}

const styles = StyleSheet.create({
  tokenCount: {
    width: 16,
    height: 16,
    color: '#1890FF',
    borderWidth: 1,
    borderColor: '#1890FF',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 16,
    marginLeft: 6,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    alignItems: 'flex-start',
  },
  token: {
    fontSize: 30,
    color: '#1890FF',
    letterSpacing: 10,
    fontVariant: ['tabular-nums'],
    fontWeight: 600,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

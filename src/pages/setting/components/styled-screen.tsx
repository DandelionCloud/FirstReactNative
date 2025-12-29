import { PropsWithChildren, ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import returnIcon from '../../../assets/icon/arrow-left.png';
import PressableWithOpacity from '../../../components/presss-opacity';

interface StyledScreenProps {
  title: ReactNode;
  onReturn: () => void;
}

export default function StyledScreen(
  props: StyledScreenProps & PropsWithChildren,
) {
  const { title, onReturn, children } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PressableWithOpacity
          containerStyles={styles.headerIcon}
          onPress={onReturn}
        >
          <Image source={returnIcon} />
        </PressableWithOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F7FA',
    boxSizing: 'border-box',
    paddingTop: 40,
  },
  header: {
    width: '100%',
    height: 22,
    boxSizing: 'border-box',
    paddingHorizontal: 14,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    width: 22,
    height: 22,
    position: 'absolute',
    left: 14,
    top: 0,
  },
  headerTitle: {
    fontSize: 18,
    lineHeight: 22,
    color: '#282731',
    fontWeight: 500,
  },
  content: {
    boxSizing: 'border-box',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

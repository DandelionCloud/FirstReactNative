import { useRef } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { StackNavigationProp } from '../../../routes/define';
import chevronRight from '../../../assets/icon/chevron-right.png';
import PressableWithOpacity from '../../../components/presss-opacity';

interface NetworkItemProps {
  title: string;
  time: string;
}

export default function NetworkItem(props: NetworkItemProps) {
  const { title, time } = props;
  const navigate = useNavigation<StackNavigationProp>();
  const swipeRef = useRef<any>(null);

  const handleDelete = () => {
    console.log('删除');
    swipeRef.current?.close();
  };

  const handlePressDetail = () => {
    console.log('press network detail', props);
    navigate.navigate('Login');
    swipeRef.current?.close();
  };

  const renderRightDelete = (
    prog: SharedValue<number>,
    drag: SharedValue<number>,
  ) => {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 54 }],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <PressableWithOpacity
          containerStyles={styles.rightAction}
          onPress={handleDelete}
        >
          <Text style={styles.actionText}>删除</Text>
        </PressableWithOpacity>
      </Reanimated.View>
    );
  };

  return (
    <ReanimatedSwipeable
      ref={swipeRef}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      containerStyle={styles.swipeableContainer}
      renderRightActions={renderRightDelete}
    >
      <View style={styles.swipeableContent}>
        <Pressable onPress={handlePressDetail}>
          <Text style={styles.swipeableTitle}>{title}</Text>
          <Text style={styles.swipeableSubtitle}>{time}</Text>
        </Pressable>
        <Image source={chevronRight} style={{ width: 20, height: 20 }} />
      </View>
    </ReanimatedSwipeable>
  );
}

const styles = StyleSheet.create({
  swipeableContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    padding: 12,
    borderRadius: 8,
  },
  swipeableContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swipeableTitle: {
    fontSize: 14,
    color: '#282731',
    lineHeight: 16,
    fontWeight: 500,
    marginBottom: 6,
  },
  swipeableSubtitle: {
    fontSize: 12,
    color: '#88878E',
    lineHeight: 16,
  },
  rightAction: {
    width: 54,
    height: '100%',
    backgroundColor: '#DC2626',
  },
  actionText: {
    textAlign: 'center',
    lineHeight: 64,
    color: '#fff',
    fontSize: 12,
  },
});

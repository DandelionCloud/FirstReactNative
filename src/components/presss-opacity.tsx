import { PropsWithChildren } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

interface PressIconProps extends PressableProps {
  containerStyles?: StyleProp<ViewStyle>;
}

export default function PressableWithOpacity(
  props: PressIconProps & PropsWithChildren,
) {
  const { containerStyles, ...pressableProps } = props;
  return (
    <Pressable
      {...pressableProps}
      hitSlop={8}
      style={({ pressed }) => [containerStyles, { opacity: pressed ? 0.6 : 1 }]}
      accessibilityRole="button"
    >
      {props.children}
    </Pressable>
  );
}

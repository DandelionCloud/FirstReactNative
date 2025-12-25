import { PropsWithChildren } from 'react';
import { Pressable, PressableProps } from 'react-native';

interface PressIconProps extends PressableProps {
  containerStyles?: {};
}

export default function PressIcon(props: PressIconProps & PropsWithChildren) {
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

import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  return (
    <View
      {...otherProps}
      className={`${otherProps.className} bg-white dark:bg-gray-800 flex-1`}
    />
  );
}

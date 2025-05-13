import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText({ style, className, ...rest }: ThemedTextProps) {
  return (
    <Text
      className={`leading-6 text-gray-900 dark:text-gray-100 ${className}`}
      {...rest}
    />
  );
}

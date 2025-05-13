// This file is a fallback for using MaterialIcons on Android and web.

import { MaterialIcons } from "@expo/vector-icons";
import { StyleProp, TextStyle, OpaqueColorValue } from "react-native";

type IconSymbolName = "house.fill" | "gearshape.2";

const MAPPING: Record<IconSymbolName, keyof typeof MaterialIcons.glyphMap> = {
  "house.fill": "home",
  "gearshape.2": "settings",
};

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  className,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  className?: string;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      className={className}
      style={style}
    />
  );
}

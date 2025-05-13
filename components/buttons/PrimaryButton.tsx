import { TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const bgVariants = {
  primary: "bg-indigo-500",
  danger: "bg-red-500",
  disabled: "bg-gray-500",
};

const ANIMATION_TIME = 200;
const FINAL_SCALE = 1.05;
const INIT_SCALE = 1;

interface PrimaryButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: "primary" | "danger";
}

export default function PrimaryButton({
  variant = "primary",
  label,
  disabled,
  onPress,
}: PrimaryButtonProps) {
  const scaleAnimation = useSharedValue(INIT_SCALE);

  const updatedVariant = disabled ? "disabled" : variant;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleAnimation.value }],
  }));

  const startAnimation = () => {
    scaleAnimation.value = withSequence(
      withTiming(FINAL_SCALE, { duration: ANIMATION_TIME }),
      withTiming(INIT_SCALE, { duration: ANIMATION_TIME })
    );
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress && onPress();
        }}
        disabled={disabled}
        className={`p-2 rounded ${bgVariants[updatedVariant]}`}
      >
        <ThemedText>{label}</ThemedText>
      </TouchableOpacity>
    </Animated.View>
  );
}

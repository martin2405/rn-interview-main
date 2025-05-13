import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ThemedText";
import Slider from "@react-native-community/slider";
import { updateErrorRate } from "@/settings/AppSettings";

export default function CandidatesScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <IconSymbol
          size={310}
          color="#FFF"
          name="gearshape.2"
          className="absolute -bottom-[90px] -left-[35px]"
        />
      }
    >
      <ThemedText className="text-3xl font-bold leading-8">Settings</ThemedText>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        value={0.1}
        thumbTintColor="#6366f1"
        minimumTrackTintColor="#6366f1"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => updateErrorRate(value)}
      />
    </ParallaxScrollView>
  );
}

import { Image, TouchableOpacity, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("@/assets/images/intro.png")}
          className="h-[200px] w-full absolute right-0 bottom-0 left-0"
        />
      }
    >
      <View className="flex-row items-center">
        <ThemedText className="text-3xl font-bold leading-8">Hello!</ThemedText>
        <HelloWave />
      </View>
      <View className="flex-1 gap-16 pb-16">
        <View className="gap-2">
          <ThemedText className="text-base leading-6 font-semibold">
            This app contains some example code and issues for you to solve! You
            are free to approach how you see fit. This includes installing any
            packages you would like, refactoring the code, etc. Please don't
            modify the api directory.
          </ThemedText>
        </View>
        <View className="gap-2 mb-2">
          <ThemedText className="text-xl font-bold">
            Task 1: Candidates Tab
          </ThemedText>
          <ThemedText>
            We want to add a new tab to the bottom tab bar. The tab should have
            a label of "Candidates". The tab should navigate to a new screen
            that contains a list of candidates using our existing candidates
            list component. Our candidates list only handles the basic
            functionality. We want to make sure that any errors, loading states,
            etc. are handled correctly. We would also like to refresh the list
            of candidates on demand
          </ThemedText>
        </View>
        <View className="gap-2">
          <ThemedText className="text-xl font-bold">
            Task 2: Error rate setting
          </ThemedText>
          <ThemedText>
            We want to have an in app setting for the error rate at runtime.
            Please add a control to the settings tab that allows to modify this
            setting. It should accept a value between 0 and 1. You can modify
            the AppSettings file but please leave the getErrorRate method.
          </ThemedText>
        </View>
        <View className="gap-2">
          <ThemedText className="text-xl font-bold">
            Task 3: Create a button component
          </ThemedText>
          <ThemedText>
            We want to have a reusable button component that can be used in the
            app. The button should have a default style. The button should also
            accept a label, disabled and onPress props. We also want to have a
            danger variant of the button that is red. We want the button scale
            on press. Please implement this using tailwind classes.
          </ThemedText>
          <View className="flex-col gap-4">
            <TouchableOpacity className="bg-indigo-500 p-2 rounded">
              <ThemedText>Normal Button</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-500 p-2 rounded">
              <ThemedText>Danger Button</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity disabled className="bg-gray-500 p-2 rounded">
              <ThemedText>Disabled Button</ThemedText>
            </TouchableOpacity>
            <PrimaryButton label="My button" />
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

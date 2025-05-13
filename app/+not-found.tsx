import { Link, Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView className="flex-1 items-center justify-center p-5">
        <ThemedText className="text-3xl font-bold leading-8">
          This screen doesn't exist.
        </ThemedText>
        <Link href="/" className="mt-4 py-4">
          <ThemedText className="text-base leading-8 text-indigo-500">
            Go to home screen!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

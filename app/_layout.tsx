import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="campaign/[id]" options={{ title: 'Campaign' }} />
        <Stack.Screen name="campaign/[id]/submit" options={{ title: 'Submit URL' }} />
      </Stack>
    </SafeAreaProvider>
  );
}

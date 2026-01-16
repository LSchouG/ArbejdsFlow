import { Tabs } from 'expo-router';

export default function PublicLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Welcome' }} />
    </Tabs>
  );
}

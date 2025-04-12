// app/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const iconMap = {
  index: 'home',
  profile: 'person',
} as const;
export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = iconMap[route.name as keyof typeof iconMap];
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderRadius: 20,
          height: 70,
          paddingBottom: 5,
          paddingTop: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 10,
          position: 'absolute',
          bottom: 15,
          marginHorizontal: 20 // Android
        },

        headerShown: false,

      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Beranda' }} />
      <Tabs.Screen name="report" options={{ title: 'Laporan' }} />
    </Tabs>
  );
}

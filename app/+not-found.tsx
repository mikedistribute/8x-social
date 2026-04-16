import { Link, Stack } from 'expo-router';

import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen does not exist.</Text>
        <Link href="/campaigns" style={styles.link}>
          <Text style={styles.linkText}>Go to campaigns</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  link: {
    marginTop: 16,
  },
  linkText: {
    fontSize: 15,
    color: '#2563eb',
  },
});

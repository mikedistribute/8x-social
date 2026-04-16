import { useMemo } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppScreen } from '@/components/AppScreen';
import { CampaignCard } from '@/features/campaigns/components/CampaignCard';
import { useCreatorFlowStore } from '@/store/creatorFlowStore';

export default function CampaignsScreen() {
  const router = useRouter();
  const campaigns = useCreatorFlowStore((state) => state.campaigns);
  const summary = useMemo(
    () => `${campaigns.length} active opportunities ready for submission.`,
    [campaigns.length]
  );

  return (
    <AppScreen scroll contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Campaigns' }} />
      <View style={styles.header}>
        <Text style={styles.title}>Active campaigns</Text>
        <Text style={styles.subtitle}>{summary}</Text>
      </View>
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
          onPress={() => router.push(`/campaign/${campaign.id}`)}
        />
      ))}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  header: {
    gap: 6,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#6b7280',
  },
});

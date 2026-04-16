import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { AppScreen } from '@/components/AppScreen';
import { EmptyState } from '@/components/EmptyState';
import { SymbolIcon } from '@/components/SymbolIcon';
import { BrandLogo } from '@/features/campaigns/components/BrandLogo';
import { ExampleVideoCard } from '@/features/campaigns/components/ExampleVideoCard';
import { formatCurrency, formatDate } from '@/features/campaigns/utils/formatters';
import { useCreatorFlowStore } from '@/store/creatorFlowStore';

export default function CampaignDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const campaign = useCreatorFlowStore((state) => state.getCampaign(id));
  const videos = useCreatorFlowStore((state) =>
    campaign ? state.getCampaignVideos(campaign) : []
  );

  if (!campaign) {
    return (
      <AppScreen contentContainerStyle={styles.emptyScreen}>
        <Stack.Screen options={{ title: 'Campaign' }} />
        <EmptyState title="Campaign not found" message="Pick another campaign from the list." />
      </AppScreen>
    );
  }

  return (
    <AppScreen scroll contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: campaign.brandName }} />
      <View style={styles.hero}>
        <View style={styles.brandRow}>
          <BrandLogo brandName={campaign.brandName} size={48} />
          <Text style={styles.brand}>{campaign.brandName}</Text>
        </View>
        <Text style={styles.headline}>{campaign.headline}</Text>
        <View style={styles.metaGroup}>
          <Text style={styles.meta}>{formatCurrency(campaign.payoutUsd)} per video</Text>
          <View style={styles.deadlineRow}>
            <SymbolIcon name="calendar" fallback="calendar" size={14} color="#6b7280" />
            <Text style={styles.meta}>Deadline {formatDate(campaign.deadlineIso)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Brief</Text>
        <Text style={styles.body}>{campaign.brief}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requirements</Text>
        {campaign.requirements.map((item) => (
          <Text key={item} style={styles.bullet}>
            • {item}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Example videos</Text>
        {videos.map((video) => (
          <ExampleVideoCard key={video.id} video={video} />
        ))}
      </View>
      <Button
        title="Submit video URL"
        onPress={() => router.push(`/campaign/${campaign.id}/submit`)}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
  },
  emptyScreen: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  hero: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brand: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
  headline: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  meta: {
    fontSize: 14,
    lineHeight: 20,
    color: '#6b7280',
  },
  metaGroup: {
    gap: 6,
  },
  deadlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    color: '#1f2937',
  },
  bullet: {
    fontSize: 14,
    lineHeight: 22,
    color: '#1f2937',
  },
});

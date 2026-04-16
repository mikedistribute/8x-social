import { useMemo } from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppScreen } from '@/components/AppScreen';
import { EmptyState } from '@/components/EmptyState';
import { SubmissionRow } from '@/features/campaigns/components/SubmissionRow';
import { useCreatorFlowStore } from '@/store/creatorFlowStore';

export default function SubmissionsScreen() {
  const campaigns = useCreatorFlowStore((state) => state.campaigns);
  const submissions = useCreatorFlowStore((state) => state.submissions);
  const brandLookup = useMemo(
    () => Object.fromEntries(campaigns.map((campaign) => [campaign.id, campaign.brandName])),
    [campaigns]
  );

  return (
    <AppScreen scroll contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Submissions' }} />
      <View style={styles.header}>
        <Text style={styles.title}>Submission status</Text>
        <Text style={styles.subtitle}>Track every pending, approved, and rejected video.</Text>
      </View>
      {submissions.length ? (
        submissions.map((submission) => (
          <SubmissionRow
            key={submission.id}
            submission={submission}
            brandName={brandLookup[submission.campaignId] ?? 'Unknown campaign'}
          />
        ))
      ) : (
        <EmptyState
          title="No submissions yet"
          message="Submit a TikTok or Instagram URL from any campaign to see it here."
        />
      )}
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

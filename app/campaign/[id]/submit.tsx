import { useMemo, useState } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { AppScreen } from '@/components/AppScreen';
import { EmptyState } from '@/components/EmptyState';
import { UrlField } from '@/features/campaigns/components/UrlField';
import { formatPlatform } from '@/features/campaigns/utils/formatters';
import { validateCreatorUrl } from '@/features/campaigns/utils/submission';
import { useCreatorFlowStore } from '@/store/creatorFlowStore';

export default function SubmitUrlScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [url, setUrl] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const campaign = useCreatorFlowStore((state) => state.getCampaign(id));
  const submitUrl = useCreatorFlowStore((state) => state.submitUrl);
  const validation = useMemo(() => validateCreatorUrl(url), [url]);

  if (!campaign) {
    return (
      <AppScreen contentContainerStyle={styles.emptyScreen}>
        <Stack.Screen options={{ title: 'Submit URL' }} />
        <EmptyState
          title="Campaign not found"
          message="Return to campaigns and choose another one."
        />
      </AppScreen>
    );
  }

  const handleSubmit = () => {
    const result = submitUrl(campaign.id, url);

    if (!result.ok) {
      setSubmitError(result.error ?? 'Unable to submit URL.');
      return;
    }

    setSubmitError(null);
    router.replace('/submissions');
  };

  return (
    <AppScreen contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Submit URL' }} />
      <View style={styles.header}>
        <Text style={styles.title}>Submit for {campaign.brandName}</Text>
        <Text style={styles.subtitle}>
          Paste a TikTok or Instagram URL. Every new submission starts as pending.
        </Text>
      </View>
      <UrlField
        value={url}
        onChangeText={(value) => {
          setUrl(value);
          setSubmitError(null);
        }}
        error={submitError ?? (url ? validation.error : null)}
        platformLabel={validation.platform ? formatPlatform(validation.platform) : null}
      />
      <Button
        title="Confirm submission"
        disabled={Boolean(validation.error)}
        onPress={handleSubmit}
      />
      <Button title="Back to campaign" variant="secondary" onPress={() => router.back()} />
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
  header: {
    gap: 6,
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

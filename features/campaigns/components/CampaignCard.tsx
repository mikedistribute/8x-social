import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BrandLogo } from '@/features/campaigns/components/BrandLogo';
import { SymbolIcon } from '@/components/SymbolIcon';
import { Campaign } from '@/features/campaigns/types';
import { formatCurrency, formatShortDate } from '@/features/campaigns/utils/formatters';

interface CampaignCardProps {
  campaign: Campaign;
  onPress: () => void;
}

export function CampaignCard({ campaign, onPress }: CampaignCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <View style={styles.brandRow}>
          <BrandLogo brandName={campaign.brandName} />
          <Text style={styles.brand}>{campaign.brandName}</Text>
        </View>
        <Text style={styles.payout}>{formatCurrency(campaign.payoutUsd)}</Text>
      </View>
      <Text style={styles.headline}>{campaign.headline}</Text>
      <View style={styles.row}>
        <Text style={styles.meta}>Per video</Text>
        <View style={styles.deadlineRow}>
          <SymbolIcon name="calendar" fallback="calendar" size={14} color="#6b7280" />
          <Text style={styles.meta}>Deadline {formatShortDate(campaign.deadlineIso)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  brandRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brand: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  payout: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2563eb',
  },
  headline: {
    fontSize: 14,
    lineHeight: 20,
    color: '#1f2937',
  },
  deadlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  meta: {
    fontSize: 13,
    color: '#6b7280',
  },
});
